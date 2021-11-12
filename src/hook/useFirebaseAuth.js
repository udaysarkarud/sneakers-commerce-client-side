import { useEffect, useState } from "react";
import initializeAppAuth from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getIdToken, signOut } from "firebase/auth";
import swal from 'sweetalert';
import axios from "axios";

initializeAppAuth();
const useFirebaseAuth = () => {
    const [userProfile, setUserProfile] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const [userRole, setUserRole] = useState({})
    const [authToken, setAuthToken] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Singin Using Email and Password
    const emailPassSingin = (loginInfo) => {
        setIsloading(true);
        const { data, history, redirect_url } = loginInfo;
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                //No Error Set
                setAuthError('')

                //UserData for collection
                const userData = { email: userCredential?.user?.email, displayName: userCredential?.user?.displayName }
                userDatatoDb(userData)

                //User redirect
                history.push(redirect_url)
            })
            .catch((error) => {
                setAuthError(error.code)
                swal({
                    title: `Sorry! ${error.code}`,
                    text: `Please try again with valid email and password`,
                    icon: "warning",
                })
            })
            .finally(() => setIsloading(false));

    }

    //Singup using Email and Password
    const emailPassRegister = (regInfo, userRouting) => {
        setIsloading(true);
        const { name, email, password } = regInfo;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //No Error Set
                setAuthError('')

                //UserData for collection
                const userData = { email, displayName: name }
                userDatatoDb(userData)

                //DisplayName show for reg
                const newUserProfile = { email, displayName: name }
                setUserProfile(newUserProfile)

                //Update displayname to firebase
                updateSingupUserName(name)

                //successfu Alart for singup
                swal({
                    title: "Congratulations!",
                    text: "Your account created successfully",
                    icon: "success",
                })

                //User redirect
                userRouting.push('/')
            })
            .catch((error) => {
                setAuthError(error.code)
                console.log(error.code)
            })
            .finally(() => setIsloading(false));
    }

    //Update Singup Email Password User's DisplayName
    const updateSingupUserName = (profilename) => {
        updateProfile(auth.currentUser, {
            displayName: profilename,
        }).then(() => {

        }).catch((error) => {

        });
    }

    // Google Singin With History Redirect
    const googleSingin = (userRouting) => {
        setIsloading(true)
        const { history, redirect_url } = userRouting;

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                //No Error Set
                setAuthError('')

                //UserData for collection
                const userData = { email: result?.user?.email, displayName: result?.user?.displayName }
                userDatatoDb(userData)

                //User redirect
                history.push(redirect_url)
            }).catch((error) => {
                setAuthError(error.code)
                console.log(error.code)
            })
            .finally(() => setIsloading(false));
    }

    // SignOut With Home Page Redirect
    const userSignOut = (userRouting) => {
        setIsloading(true)
        const { history, redirect_url } = userRouting;

        signOut(auth).then(() => {
            //No Error Set
            setAuthError('')

            //User redirect
            history.push(redirect_url)
        }).catch((error) => {
            setAuthError(error.code)
            console.log(error.code)
        })
            .finally(() => setIsloading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserProfile(user)
                getIdToken(user)
                    .then((idToken) => {
                        setAuthToken(idToken);
                    })
            } else {
                setUserProfile({})
            }
            setIsloading(false)
        });
    }, [auth])


    //UserData Store on Db
    const userDatatoDb = (userInfo) => {
        console.log(userInfo)
        axios.put('http://localhost:5000/usersdata', userInfo)
            .then(res => {
                console.log(res)
            })
    }

    //Check User Role
    useEffect(() => {
        axios.get(`http://localhost:5000/usersdata/${userProfile.email}`)
            .then(res => {
                setUserRole(res.data)
            })
    }, [userProfile.email])

    return {
        emailPassSingin,
        emailPassRegister,
        googleSingin,
        userSignOut,
        userProfile,
        authError,
        isLoading,
        userRole,
        authToken
    }
}

export default useFirebaseAuth;