import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RatingView } from 'react-simple-star-rating';
import SingleReview from './../../SingleReview/SingleReview'

const ReviewSection = () => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => setReviewData(res.data))
    }, [])
    return (
        <section className="testimonial-area grey-bg pt-80 pb-100 section-divider">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="sec-title text-center mb-50">
                            <h1>What Travellers Say About Us</h1>
                            <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        reviewData.length === 0 ?
                            <section className="container section-gap">
                                <div className="container">
                                    <div className="row">
                                        <img style={{ width: "300px" }} src="https://cdn.lowgif.com/full/31baf3ba3f2592ab-animated-gif-transparent-background-14-gif-images-download.gif" className="rounded mx-auto d-block" alt="..." />
                                    </div>
                                </div>
                            </section>
                            :
                            reviewData?.map(review => <SingleReview key={review._id} review={review} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default ReviewSection;