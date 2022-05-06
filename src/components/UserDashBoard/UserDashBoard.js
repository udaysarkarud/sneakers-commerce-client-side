import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from './MyOrders';
import MyProfile from './MyProfile';
const UserDashBoard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>UserDahboard</h2>

            <div>
                <div className="my-5">
                    {/* <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-menu-button-wide"></i>
                </button>

            </header> */}

                    <div className="container-fluid">
                        <div className="row">
                            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                                <div className="position-sticky pt-3">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">
                                                <span data-feather="home"></span>
                                                Dashboard
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="bi bi-bag-check"></i> Products
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="bi bi-archive"></i> Orders
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="bi bi-heart-half"></i> Reviews
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="bar-chart-2"></span>
                                                Reports
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                <h2>Section title</h2>
                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Header</th>
                                                <th scope="col">Header</th>
                                                <th scope="col">Header</th>
                                                <th scope="col">Header</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1,001</td>
                                                <td>random</td>
                                                <td>data</td>
                                                <td>placeholder</td>
                                                <td>text</td>
                                            </tr>
                                            <tr>
                                                <td>1,002</td>
                                                <td>placeholder</td>
                                                <td>irrelevant</td>
                                                <td>visual</td>
                                                <td>layout</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </main>
                        </div>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/myprofile`}>
                            <MyProfile />
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;