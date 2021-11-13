import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleProduct = (props) => {
    const { _id, productName, productType, brandName, productOldPrice, productNewPrice, productImg1, productImg2, productImg3, productImg4, productDescription } = props.product
    return (
        <div className="col">
            <div className="card h-100">
                <img src={productImg1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <p className="fw-bold fs-6 text-right"><del className="text-danger"> ${productOldPrice} </del> / ${productNewPrice} </p>
                        <p className="fw-bold fs-6 text-muted"><i className="bi bi-info-circle"></i> {productType}</p>
                    </div>
                    <h5 className="fw-bolder">{productName}</h5>
                    <p className="card-text">{productDescription?.slice(0, 100)}</p>
                    <NavLink to={`/admindashboard/ordernow/${_id}`} className="btn btn-outline-warning">Buy Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;