import React from 'react';
import { NavLink } from 'react-router-dom';

const BannerSection = () => {
    return (
        <section className="hero-banner" id="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <div className="banner-text-wrap">
                            <h1 className="text-white">Get Your Next Nike @ 20% off</h1>
                            <p className="text-white">For one day only, save 20% on select styles.Ends 9PM PT. Things are better as a Nike Member. Get first and exclusive access to the newest styles & innovation, free shipping, birthday rewards and more.</p>

                            <NavLink to='/exploreshoes' className="btn btn-outline-light btn-lg">By Awsome Sneakers</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 my-5">
                        <div className="banner-text-wrap justify-content-center">
                            <img className="img-fluid" src="https://www.freepnglogos.com/uploads/shoes-png/download-nike-shoes-transparent-png-for-designing-projects-16.png" width="400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;