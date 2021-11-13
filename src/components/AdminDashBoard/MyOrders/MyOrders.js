import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../hook/useAuth';

const MyOrders = () => {
    const { userProfile } = useAuth();

    const [ordersData, setOrdersData] = useState([]);
    const [dbLoad, setDbload] = useState(0);

    useEffect(() => {
        axios.get(`https://radiant-eyrie-71480.herokuapp.com/orders?search=${userProfile.email}`)
            .then(res => {
                setOrdersData(res.data)
                setDbload(dbLoad + 1)
            })
    }, [dbLoad])

    const deleteOrder = (orderId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able track this Order",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://radiant-eyrie-71480.herokuapp.com/orders/${orderId}`)
                        .then(res => {
                            setDbload(dbLoad + 1)
                        })
                    swal("Deleted Selected Order successfully", {
                        icon: "success",
                    });
                } else {
                    swal("You can still tack this Order");
                }
            });
    }
    return (
        <div>
            <h2>Manage Orders</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Product info</th>
                            <th scope="col">Quantity And Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ordersData.length === 0 ?
                                <section className="container section-gap">
                                    <div className="container">
                                        <div className="row">
                                            <img style={{ width: "300px" }} src="https://cdn.lowgif.com/full/31baf3ba3f2592ab-animated-gif-transparent-background-14-gif-images-download.gif" className="rounded mx-auto d-block" alt="..." />
                                        </div>
                                    </div>
                                </section>
                                :
                                ordersData?.map((order, index) => <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order.orderDate}</td>
                                    <td style={{ maxWidth: '150px' }}>
                                        {order.productName}<br />
                                        <img src={order.productImg1} className="img-thumbnail" width='100' />
                                    </td>
                                    <td>
                                        {order.quantity} x {order.productNewPrice} = {order.totalAmount}
                                    </td>
                                    <td>
                                        <p>Order Status:  {order.status}</p>
                                        <button onClick={() => deleteOrder(order._id)} className="btn my-2">Cancel Order</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;