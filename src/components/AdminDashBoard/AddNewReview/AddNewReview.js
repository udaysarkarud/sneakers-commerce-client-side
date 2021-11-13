import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react/cjs/react.development';
import swal from 'sweetalert';
import useAuth from '../../../hook/useAuth';
import { Rating, RatingView } from 'react-simple-star-rating'
const AddNewReview = () => {
    const { userProfile } = useAuth();
    const [clientRating, setClientRating] = useState(0);
    const handleRating = (rate) => {
        setClientRating(rate)

    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const reviewData = { ...data, clientImg: userProfile?.photoURL || 'https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png', clientRating }
        console.log(reviewData);
        if (clientRating) {
            axios.post('http://localhost:5000/reviews', reviewData)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log(res.data.insertedId);
                        reset();
                        swal({
                            title: "New Product Added Successfully",
                            icon: "success",
                        });
                    }
                })
        } else {
            reset();
        }

    };
    useEffect(() => {
        reset()
    }, [userProfile])

    return (
        <section className="container section-gap">
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-6">
                    <div>
                        <h1>Provide a Review</h1>
                        <p>Please fill all informations fields to provide a review. Your review'll be great information for developing our service.</p>
                    </div>
                    <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-6">
                            <label className="form-label">Full Name</label>

                            <input {...register("clientName")} className="form-control" defaultValue={userProfile.displayName} readOnly />
                        </div>

                        <div className="col-6">
                            <label className="form-label">Email Address</label>

                            <input {...register("clientEmail")} className="form-control" defaultValue={userProfile.email} readOnly />
                        </div>


                        <div className="col-12">
                            <label className="form-label">Your Review</label>


                            <textarea {...register("clientReview")} className="form-control" placeholder="Write your review" required />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Your Rating</label> <br />
                            <Rating onClick={handleRating} ratingValue={clientRating} size={40}>
                                <span className="display-5">
                                    <i className="bi bi-bookmark-star-fill"></i>
                                </span>
                            </Rating>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit Review</button>

                            <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Clear fields</button>
                        </div>

                    </form>
                </div>
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://i.pinimg.com/750x/fa/24/87/fa2487ad05c4a8e2437d6ed049ba48ca.jpg" alt="..." style={{ width: '400px' }} /></div>
            </div>
        </section >
    );
};

export default AddNewReview;