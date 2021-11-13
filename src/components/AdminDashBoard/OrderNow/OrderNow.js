import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';
import useFirebaseAuth from '../../../hook/useFirebaseAuth';

const OrderNow = () => {
    const { pId } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/products?find=${pId}`)
            .then(res => setProductsData(res.data))
    }, [])

    const [productsData, setProductsData] = useState([]);
    const { _id, productName, productType, brandName, productOldPrice, productNewPrice, productImg1, productImg2, productImg3, productImg4, productDescription } = productsData


    const [quantity, setQuantity] = useState(1)
    const [bigImg, setBigImg] = useState('')
    const { userProfile } = useFirebaseAuth();

    const history = useHistory();


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const orderDate = new Date();
        const orderData = { productId: _id, productName, productImg1, ...data, quantity, productNewPrice, totalAmount: quantity * productNewPrice, orderDate: orderDate.toLocaleDateString(), status: 'pending' }
        console.log(orderData);

        if (data.clientEmail) {
            axios.post('http://localhost:5000/orders', orderData)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log(res.data.insertedId);
                        reset();
                        swal({
                            title: "New Order Placed Successfully",
                            text: `Product Name: ${productName} | Quantity: ${quantity}`,
                            icon: "success",
                        });
                        history.push('/admindashboard/myorders')
                    }
                })
        } else {
            reset();
        }

    };




    useEffect(() => {
        reset()
    }, [productsData])
    return (
        <section className="py-5">
            {
                productsData.length === 0 ?
                    <section className="container section-gap">
                        <div className="container">
                            <div className="row">
                                <img style={{ width: "300px" }} src="https://cdn.lowgif.com/full/31baf3ba3f2592ab-animated-gif-transparent-background-14-gif-images-download.gif" className="rounded mx-auto d-block" alt="..." />
                            </div>
                        </div>
                    </section>
                    :
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6">
                                <img className="img-thumbnail card-img-top mb-5 mb-md-0" src={bigImg || productImg1} alt="..." />
                                <div className="row my-lg-4">
                                    <div className="col-3">
                                        <img className="img-thumbnail" src={productImg1} alt="" onMouseMove={() => setBigImg(productImg1)} />
                                    </div>
                                    <div className="col-3">
                                        <img className="img-thumbnail" src={productImg2} alt="" onMouseMove={() => setBigImg(productImg2)} />
                                    </div>
                                    <div className="col-3">
                                        <img className="img-thumbnail" src={productImg3} alt="" onMouseMove={() => setBigImg(productImg3)} />
                                    </div>
                                    <div className="col-3">
                                        <img className="img-thumbnail" src={productImg4} alt="" onMouseMove={() => setBigImg(productImg4)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-5 my-lg-0">
                                <div className="productInfo">
                                    <div className="small mb-1">SKU: {_id.slice(0, 6)}</div>
                                    <div className="fs-5">
                                        <span>{brandName} : </span>
                                        <span className="text-danger">{productType}</span>
                                    </div>

                                    <h1 className="display-5 fw-bolder">{productName}</h1>
                                    <div className="fs-5 mb-3">
                                        <span className="text-decoration-line-through">${productOldPrice}.00</span>
                                        <span>${productNewPrice}.00</span>
                                    </div>
                                    <p className="lead">{productDescription}</p>

                                    <div className="input-group mb-3">
                                        <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-dash-circle"></i></button>

                                        <input className="" placeholder="" key={quantity} defaultValue={quantity} />

                                        <button onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-secondary"><i className="bi bi-plus-circle"></i></button>
                                    </div>
                                    {/* <div className="d-flex">
                                        <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                            <i className="bi-cart-fill me-1"></i>
                                            Add to cart
                                        </button>
                                    </div> */}
                                </div>

                                <div className="productInfo">
                                    <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                                        <div className="col-md-6">
                                            <label className="form-label">Full Name</label>

                                            <input {...register("clientName")} className="form-control" defaultValue={userProfile.displayName} readOnly />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>

                                            <input {...register("clientEmail")} className="form-control" defaultValue={userProfile.email} readOnly />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Phone</label>

                                            <input {...register("clientPhone")} className="form-control" placeholder="Your Phone Number" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Total Amount</label>

                                            <input className="form-control" key={quantity + 1} defaultValue={parseInt(productNewPrice) * quantity} disabled={true} />

                                            {/* <input key={_id} defaultValue={parseInt(productNewPrice) * quantity} hidden /> */}

                                            {/*  <input {...register("totalAmount")} type="number" className="form-control" id="totalAmount" key={quantity} defaultValue={parseInt(productNewPrice) * quantity} disabled /> */}
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">Address</label>

                                            <input {...register("clientAddress")} className="form-control" placeholder="Product Shpping Address" required />
                                        </div>


                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Place Order</button>
                                            <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Clear fields</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </section >
    );
};

export default OrderNow;