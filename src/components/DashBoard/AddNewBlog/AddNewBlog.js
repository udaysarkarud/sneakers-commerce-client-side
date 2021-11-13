import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hook/useAuth';
const AddNewBlog = () => {
    const { userProfile } = useAuth();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/blogs', data)
            .then(res => {
                swal("Great!", "Your Blog Post Added successfully", "success");
                reset()
                console.log(res.data);
            })


    };

    useEffect(() => {
        reset();
    }, [userProfile])

    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="text-center ">
                        <h1>Popular Tour</h1>
                        <p>The World's Largest Selection of Holiday Lettings. Find The Perfect Escape. Discover our popular package and find your soul again.</p>
                    </div>
                </div>
            </div>

            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0 rounded-3" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9cc12656-062f-4911-ac64-ae473064c349/dri-fit-sport-clash-mens-woven-training-shorts-1XRJv3.png" alt="..." /></div>
                <div className="col-md-6">
                    <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-12">
                            <label className="form-label">Blog Title</label>

                            <input {...register("blogTitle")} className="form-control" placeholder="Blog Title" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Tag</label>

                            <input {...register("blogTag")} className="form-control" placeholder="Blog Tag" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Author Name</label>

                            <input {...register("authorName")} className="form-control" placeholder="Author Name" defaultValue={userProfile.displayName} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Publish Date</label>

                            <input {...register("publishDate")} className="form-control" placeholder="11/25/2021" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Blog Image</label>

                            <input {...register("blogImg")} className="form-control" placeholder="Image URL" required />
                        </div>

                        <div className="col-12">
                            <textarea {...register("blogDescription")} className="form-control" placeholder="Description" rows="6" required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add New Blog</button>
                            <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Clear fields</button>
                        </div>

                    </form>
                </div>
            </div>
        </section >
    );
};

export default AddNewBlog;