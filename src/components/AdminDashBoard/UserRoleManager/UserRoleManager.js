import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hook/useAuth';
const UserRoleManager = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { authToken } = useAuth();

    const onSubmit = data => {
        const newAdmin = { ...data, type: 'rolemanagement' }
        axios.put('https://radiant-eyrie-71480.herokuapp.com/usersdata', newAdmin)
            .then(res => {
                console.log(res)
                if (res.data.modifiedCount === 1) {
                    swal({
                        title: `Congratulations! ${data.email}`,
                        text: "Now will maintain an admin role",
                        icon: "success",
                    })
                }
            })
    };
    return (
        <section className="container">
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-6">
                    <div>
                        <h1>Make Admin</h1>
                        <p>To make an user to admin you need to use users orginal email addres. By this way an normal user can control everything as like you do. Make sure that you have selected right person to give admin role.</p>
                    </div>

                    <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-12">
                            <label className="form-label">User Email</label>

                            <input {...register("email", { required: true })} placeholder="email" className="form-control" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add Product</button>
                            <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Clear fields</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/qlipbta7whtkp71xolyx/gift-card-RpyEVO.png" alt="..." /></div>
            </div>
        </section >
    );
};

export default UserRoleManager;