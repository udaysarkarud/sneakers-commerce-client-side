import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RatingView } from 'react-simple-star-rating';
import SingleReview from './../../SingleReview/SingleReview'

const ReviewSection = () => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        axios.get('https://radiant-eyrie-71480.herokuapp.com/reviews')
            .then(res => setReviewData(res.data))
    }, [])
    return (
        <section className="testimonial-area grey-bg pt-80 pb-100 section-divider">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="sec-title text-center mb-50">
                            <h1>What our customers Say About Us</h1>
                            <p>  Our awsome customers said their words about our service. they said how much good are our products. Our product is not cheap 'coz good products are not comes... </p>
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