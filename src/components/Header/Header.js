import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
const Header = () => {
    const { userSignOut, userProfile, isLoading, } = useAuth()
    const history = useHistory()
    const redirect_url = '/home'

    const singoutUser = () => {
        const userRouting = { history, redirect_url }
        userSignOut(userRouting)
    }
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white fw-bolder fs-2" href="https://assignment-10-healthcare.web.app/">
                            <img className="img-fluid" src="http://sneaker.mallthemes.com/wp-content/uploads/2018/10/logo-2-retina.png" alt="" width="153" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <NavLink to="/home" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/home#about" className="nav-link">About</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/exploreshoes" className="nav-link">Explore Shoes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/blogs" className="nav-link">Blog</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/home#contact" className="nav-link">Contact</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/addnewproduct" className="nav-link">Add New Product</NavLink>
                                </li>
                            </ul>

                            <div>
                                {
                                    userProfile.email ?
                                        <>
                                            <div className="dropdown">
                                                <button className="btnprofile text-start" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={userProfile?.photoURL || 'https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png'} style={{ width: "40px" }} className="rounded-circle me-2" />
                                                    <span className="text-white me-2" style={{ fontWeight: 600 }}>{userProfile.displayName} <i className="ms-2 bi bi-caret-down-square"></i></span>
                                                </button>

                                                <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton1">
                                                    <li>


                                                        <NavLink to="admindashboard" className="dropdown-item"><i className="bi bi-sliders"></i> DashBoard</NavLink>
                                                    </li>
                                                    <li>

                                                        <a className="dropdown-item" href="#"><span onClick={singoutUser}><i className="bi bi-box-arrow-in-right"></i> Logout</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <NavLink to="/login" className="btn btn-outline-light">Login</NavLink>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;