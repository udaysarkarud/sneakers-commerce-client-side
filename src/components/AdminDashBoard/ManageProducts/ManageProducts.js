import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
const ManageProducts = () => {
    const [productsData, setProductsData] = useState([]);
    const [dbLoad, setDbload] = useState(0);

    useEffect(() => {
        axios.get('https://radiant-eyrie-71480.herokuapp.com/products')
            .then(res => setProductsData(res.data))
    }, [dbLoad])

    const deleteProduct = (proId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, your buyers'll not seee this product",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://radiant-eyrie-71480.herokuapp.com/products/${proId}`)
                        .then(res => {
                            setDbload(dbLoad + 1)
                        })
                    swal("Deleted Selected Product successfully", {
                        icon: "success",
                    });
                } else {
                    swal("Your users can still order on this product");
                }
            });
    }
    return (
        <div>
            <h2>Manage Products</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Img</th>
                            <th scope="col">Product name</th>
                            <th scope="col">Product Type</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
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
                                productsData?.map((product, index) => <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td><img src={product.productImg1} className="img-thumbnail" width='100' /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.productType}</td>
                                    <td>
                                        {product.productType}<br />
                                        {product.productOldPrice}
                                    </td>
                                    <td>
                                        <button onClick={() => deleteProduct(product._id)} className="btn my-2">Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;