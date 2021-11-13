import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../SingleProduct/SingleProduct';

const AllProducts = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProductsData(res.data))
    }, [])
    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-6">

                    <h1>Find Awsome Shoes</h1>
                    <p>The World's Largest shoes shope. We prodive top class of quality. "coz we know how to make shoes that feel comfortable for your feet</p>

                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
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
                        productsData?.map(product => <SingleProduct key={product._id} product={product} />)
                }
            </div>
        </section>
    );
};

export default AllProducts; <h2>Products</h2>