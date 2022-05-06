import React from 'react';
import { RatingView } from 'react-simple-star-rating';

const SingleReview = (props) => {
    const { _id, clientName, clientEmail, clientReview, clientImg, clientRating } = props.review
    return (
        <div className="col-md-4">
            <div className="testi-slider">
                <div className="testi-slider-active owl-carousel">
                    <div className="single-testi white-bg transition-3">
                        <span className="quote">
                            <i className="bi bi-quote"></i>
                        </span>
                        <p>{clientReview.slice(0, 150)}...</p>

                        <RatingView ratingValue={clientRating} /* RatingView Props */ />

                        <div className="testi-person d-flex align-items-center">
                            <div className="testi-thumb mr-20">
                                <img src={clientImg} alt="..." />
                            </div>
                            <div className="testi-info ms-2">
                                <h4>{clientName}</h4>
                                <span>{clientEmail}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;