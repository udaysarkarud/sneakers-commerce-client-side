import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
const Registration = () => {
    const { emailPassRegister, googleSingin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password.length >= 8 && data.password === data.repassword) {
            emailPassRegister(data, history)
        }
        else {
            swal({
                title: "Check Password!",
                text: "Use minimum 8 characters, Need to match your Password and Re-Password both fields",
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
            <h2>This is Reg</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true })} placeholder="name" />
                {/* errors will return when field validation fails  */}
                {errors.name && <span>This field is required</span>}
                <br /><br />

                <input {...register("email", { required: true })} placeholder="email" />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
                <br /><br />

                <input {...register("password", { required: true })} placeholder="password" />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}
                <br /><br />

                <input {...register("repassword", { required: true })} placeholder="repassword" />
                {/* errors will return when field validation fails  */}
                {errors.repassword && <span>This field is required</span>}
                <br /><br />

                <input type="submit" />
            </form>
            <button onClick={loginWithGoogle}>Google Singin</button>
        </div>
    );
};

export default Registration;