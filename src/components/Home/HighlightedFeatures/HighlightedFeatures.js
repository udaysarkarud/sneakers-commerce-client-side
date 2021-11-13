import React from 'react';

const HighlightedFeatures = () => {
    return (
        <section className="container features-section">
            <div className="row gx-0">

                <div className="col-md-4">
                    <div className="bg1 p-5 d-flex">
                        <i className="bi bi-truck text-white fs-1"></i>
                        <div className="ms-3">
                            <h3 className="text-white fw-bolder">Free Delivery</h3>
                            <p className="text-white fw-bolder">Worldwide</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="bg2 p-5  d-flex">
                        <i className="bi bi-person-workspace text-white fs-1"></i>
                        <div className="ms-3">
                            <h3 className="text-white fw-bolder">27/4 Support</h3>
                            <p className="text-white fw-bolder">Customer Support</p>

                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="bg3 p-5  d-flex">
                        <i className="bi bi-credit-card-2-front text-white fs-1"></i>
                        <div className="ms-3">
                            <h3 className="text-white fw-bolder">Payment Security</h3>
                            <p className="text-white fw-bolder">Safe Payment</p>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default HighlightedFeatures;