import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
const Registration = () => {
    const { emailPassRegister, googleSingin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password.length >= 6 && data.password === data.repassword) {
            emailPassRegister(data, history)
        }
        else {
            swal({
                title: "Check Password!",
                text: "Use minimum 6 characters, Need to match your Password and Re-Password both fields",
                icon: "warning",
            })
        }
    };

    const loginWithGoogle = () => {
        const userRouting = { history, redirect_url };
        googleSingin(userRouting);
    }

    return (
        <section className="container section-gap">
            <section className="">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/db58900c-c22d-4cdd-a66b-72e61af5b21f/jordan-6-17-23-shoes-kN83hh.png"
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <img className="img-fluid" src="https://youthful-noyce-92cc85.netlify.app/logo-1.png" alt="" width="153" />
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3">Sign into
                                                    your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input {...register("name", { required: true })} placeholder="Your Name" className="form-control form-control-lg" required />

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input {...register("email", { required: true })} placeholder="Your Email" className="form-control form-control-lg" required />

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input {...register("password", { required: true })} placeholder="Password" className="form-control form-control-lg" type="password" required />

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input {...register("repassword", { required: true })} placeholder="Re-Password" className="form-control form-control-lg" type="password" required />

                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn" type="submit">Registration</button>
                                                    <button className="btn ms-2 mt-2 mt-md-0" onClick={loginWithGoogle}>Google Singin</button>
                                                </div>

                                                <p className="mb-5 pb-lg-2" >Don't have an account? <Link to='/registration'>Register here</Link>
                                                </p>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default Registration;