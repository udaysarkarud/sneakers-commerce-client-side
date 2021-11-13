import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../hook/useAuth';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const Login = () => {
    const { emailPassSingin, googleSingin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const logingData = { data, history, redirect_url };
        if (data.password.length >= 6) {
            emailPassSingin(logingData);
        }
        else {
            swal({
                title: "Check Password!",
                text: "Use right password which is  6 or more than 6 characters",
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
                                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <img className="img-fluid" src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/logo-1.png" alt="" width="153" />
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3">Sign into
                                                    your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input {...register("email", { required: true })} placeholder="email" className="form-control form-control-lg" required />

                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input {...register("password", { required: true })} placeholder="password" className="form-control form-control-lg" required />

                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn" type="submit">Login</button>
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

export default Login;