import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import UserRoleManager from './UserRoleManager/UserRoleManager';
import useAuth from './../../hook/useAuth';
import AdminSecureRoute from '../SecureRoute/AdminSecureRoute';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import AddNewBlog from './AddNewBlog/AddNewBlog';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import AllProducts from './AllProducts/AllProducts';
import MyOrders from './MyOrders/MyOrders';
import AddNewReview from './AddNewReview/AddNewReview';
import OrderNow from './OrderNow/OrderNow';
import Payments from './Payments/Payments';

const AdminDashBoard = () => {
    let { path, url } = useRouteMatch();
    const { userRole } = useAuth();
    const { userSignOut, userProfile, isLoading, } = useAuth()
    return (
        <div>
            <div>
                <div className="my-5">
                    <div className="container-fluid">
                        <div className="row">
                            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                                <div className="position-sticky pt-3">
                                    <ul className="nav flex-column">
                                        {
                                            userRole.admin ?
                                                <>
                                                    <li>
                                                        <NavLink className="nav-link" to={`${url}`}><i className="bi bi-speedometer2"></i> Dashboard</NavLink>
                                                    </li>

                                                    <li>
                                                        <Link className="nav-link" to={`${url}/manageorders`}>
                                                            <i className="bi bi-archive"></i> Manage Orders</Link>
                                                    </li>

                                                    <li>
                                                        <Link className="nav-link" to={`${url}/addnewproduct`}>
                                                            <i className="bi bi-bag-check"></i> Add New Product</Link>
                                                    </li>

                                                    <li>
                                                        <Link className="nav-link" to={`${url}/manageproducts`}>
                                                            <i className="bi bi-bag-check"></i> Manage Products</Link>
                                                    </li>

                                                    <li>
                                                        <Link className="nav-link" to={`${url}/addnewblog`}><i className="bi bi-file-earmark-break"></i> Add New Blog Post</Link>
                                                    </li>

                                                    <li>
                                                        <Link className="nav-link" to={`${url}/manageusersrole`}><i className="bi bi-person-video2"></i> Manage Users Role</Link>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li>
                                                        <NavLink className="nav-link" to={`${url}`}><i className="bi bi-speedometer2"></i> Dashboard</NavLink>
                                                    </li>
                                                    <li>
                                                        <Link className="nav-link" to={`${url}/payments`}><i className="bi bi-paypal"></i> Payments</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="nav-link" to={`${url}/exploreproducts`}><i className="bi bi-bag-check"></i> Explore Products</Link>
                                                    </li>


                                                    <li>
                                                        <Link className="nav-link" to={`${url}/myorders`}><i className="bi bi-archive"></i> My Orders</Link>
                                                    </li>


                                                    <li>
                                                        <Link className="nav-link" to={`${url}/addreview`}><i className="bi bi-heart-half"></i> Add Reviews</Link>
                                                    </li>
                                                </>
                                        }

                                        <li>
                                            <button className="btn" onClick={userSignOut}>LogOut</button>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                <div>
                                    <Switch>
                                        <Route exact path={path}>
                                            <h1>DashBoard</h1>
                                        </Route>

                                        <Route path={`${path}/payments`}>
                                            <Payments />
                                        </Route>

                                        <Route path={`${path}/exploreproducts`}>
                                            <AllProducts />
                                        </Route>

                                        <Route path={`${path}/myorders`}>
                                            <MyOrders />
                                        </Route>
                                        <Route path={`${path}/addreview`}>
                                            <AddNewReview />
                                        </Route>
                                        <Route path={`${path}/ordernow/:pId`}>
                                            <OrderNow />
                                        </Route>


                                        <AdminSecureRoute path={`${path}/addnewproduct`}>
                                            <AddNewProduct />
                                        </AdminSecureRoute>
                                        <AdminSecureRoute path={`${path}/manageproducts`}>
                                            <ManageProducts />
                                        </AdminSecureRoute>

                                        <AdminSecureRoute path={`${path}/addnewblog`}>
                                            <AddNewBlog />
                                        </AdminSecureRoute>

                                        <AdminSecureRoute path={`${path}/manageorders`}>
                                            <ManageOrders />
                                        </AdminSecureRoute>

                                        <AdminSecureRoute path={`${path}/manageusersrole`}>
                                            <UserRoleManager />
                                        </AdminSecureRoute>
                                    </Switch>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashBoard;