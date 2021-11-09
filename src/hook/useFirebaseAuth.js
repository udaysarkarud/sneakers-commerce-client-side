import { useEffect, useState } from "react";
import initializeAppAuth from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import swal from 'sweetalert';

initializeAppAuth();
const useFirebaseAuth = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsloading] = useState(true)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Singin Using Email and Password
    const emailPassSingin = (loginInfo) => {
        setIsloading(true);
        const { email, password } = loginInfo.data;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
            })
            .catch((error) => {
                setAuthError(error.code)
                console.log(error.code)
            })
            .finally(() => setIsloading(false));

    }

    //Singup using Email and Password
    const emailPassRegister = (regInfo, userRouting) => {
        setIsloading(true);
        const { name, email, password } = regInfo;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
                swal({
                    title: "Congratulations!",
                    text: "Your account created successfully",
                    icon: "success",
                })
                userRouting.push('/')
            })
            .catch((error) => {
                setAuthError(error.code)
                console.log(error.code)
            })
            .finally(() => setIsloading(false));
    }

    // Google Singin With History Redirect
    const googleSingin = (userRouting) => {
        setIsloading(true)
        const { history, redirect_url } = userRouting;

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
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
            console.log('Sing Out Done')
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
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });
    }, [])
    return {
        emailPassSingin,
        emailPassRegister,
        googleSingin,
        userSignOut
    }
}

export default useFirebaseAuth;