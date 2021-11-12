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
        axios.put('http://localhost:5000/usersdata', newAdmin)
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
        <div>
            <h2>User Role Managment</h2>
            <div>==============================</div>
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("email", { required: true })} placeholder="email" />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
                <br /><br />


                <input type="submit" />
            </form>
            <div>==============================</div>
        </div>
    );
};

export default UserRoleManager;