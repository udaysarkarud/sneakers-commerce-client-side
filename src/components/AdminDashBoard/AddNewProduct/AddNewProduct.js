import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
const AddNewProduct = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {

        console.log(data);
        if (data.productName) {
            axios.post('https://radiant-eyrie-71480.herokuapp.com/products', data)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log(res.data.insertedId);
                        swal({
                            title: "New Product Added Successfully",
                            icon: "success",
                        });
                        reset();
                    }
                })
        } else {
            reset();
        }

    };
    return (
        <section className="container section-gap">

            <div className="row gx-4 gx-lg-5">
                <div className="col-md-6">
                    <div>
                        <h1>Add New Product</h1>
                        <p>Please fill all informations & profile Images. It'll help buyers to choose the right product for them.</p>
                    </div>
                    <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-12">
                            <label htmlhtmlFor="productName" className="form-label">Product Name</label>

                            <input {...register("productName")} className="form-control" placeholder="Product Name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlhtmlFor="productType" className="form-label">Product Type</label>

                            <input {...register("productType")} className="form-control" placeholder="Product Type" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlhtmlFor="brandName" className="form-label">Brand Name</label>

                            <input {...register("brandName")} className="form-control" placeholder="Brand Name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlhtmlFor="productOldPrice" className="form-label">Old Price</label>

                            <input {...register("productOldPrice")} className="form-control" placeholder="Old Price" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlhtmlFor="productNewPrice" className="form-label">New Price</label>

                            <input {...register("productNewPrice")} className="form-control" placeholder="New Price" required />
                        </div>

                        <div className="col-12">
                            <label htmlhtmlFor="ProductImage" className="form-label">Image URL</label>
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <input {...register("productImg1")} className="form-control" placeholder="Image - 1" required />
                                </div>
                                <div className="col-md-3">
                                    <input {...register("productImg2")} className="form-control" placeholder="Image - 2" required />
                                </div>
                                <div className="col-md-3">
                                    <input {...register("productImg3")} className="form-control" placeholder="Image - 3" required />
                                </div>
                                <div className="col-md-3">
                                    <input {...register("productImg4")} className="form-control" placeholder="Image - 4" required />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <textarea {...register("productDescription")} className="form-control" placeholder="Description" rows="6" required />
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

export default AddNewProduct;