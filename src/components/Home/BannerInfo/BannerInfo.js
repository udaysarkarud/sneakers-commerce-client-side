import React from 'react';
import { NavLink } from 'react-router-dom';

const BannerInfo = () => {
    return (
        <section className="py-5">
            <div className="container my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="rounded-3 card-img-top mb-5 mb-md-0" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/db58900c-c22d-4cdd-a66b-72e61af5b21f/jordan-6-17-23-shoes-kN83hh.png" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1 text-danger">Upcoming Awsome Icon</div>

                        <h1 className="display-5 fw-bolder">Jordan 6-17-23</h1>
                        <div className="fs-5 mb-5">
                            <span>Release @ 19/12/2021</span>
                        </div>
                        <p className="lead">The Jordan 6-17-23 remixes details from 3 classic Air Jordans to create a fresh twist on the game shoe's heritage. Familiar elements like the bump-out collar and heel spoiler of the 6, the line of molded lace loops and smooth toe from the 17, and the sculpted midsole overlay of the 23 hook to history while forging a new look.</p>
                        <div className="d-flex">

                            <NavLink className="btn btn-outline-dark flex-shrink-0" to="/exploreshoes">Explore Upcomings</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerInfo;