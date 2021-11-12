import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../hook/useAuth';
import swal from 'sweetalert';

const Login = () => {
    const { emailPassSingin, googleSingin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const logingData = { data, history, redirect_url };
        if (data.password.length >= 8) {
            emailPassSingin(logingData);
        }
        else {
            swal({
                title: "Check Password!",
                text: "Use right password which is  8 or more than 8 characters",
                icon: "warning",
            })
        }

    };

    const loginWithGoogle = () => {
        const userRouting = { history, redirect_url };
        googleSingin(userRouting);
    }
    return (
        <div>
            <h2>This is Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("email", { required: true })} placeholder="email" />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
                <br /><br />

                <input {...register("password", { required: true })} placeholder="password" />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}
                <br /><br />

                <input type="submit" />
            </form>
            <button onClick={loginWithGoogle}>Google Singin</button>
        </div>
    );
};

export default Login;