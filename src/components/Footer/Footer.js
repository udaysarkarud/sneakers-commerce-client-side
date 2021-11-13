import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-widget">
                            <h3>Contact Us</h3>
                            <ul className="footer-address">
                                <li>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <h4>Address</h4>
                                        <p>4145 Clarence Court <br />Fayetteville, NC</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-telephone-outbound-fill"></i>
                                    <div>
                                        <h4>Phone</h4>
                                        <p> <a href="tel:+0123456789">+0242-86-457</a></p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-envelope-fill"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p> <a href="tel:+0123456789">Info@sneaker.com</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-2">
                        <div className="footer-widget">
                            <h3>Thing Need</h3>
                            <ul className="footer-menu">
                                <li> <Link to='/'>GIFT CARDS</Link></li>
                                <li> <Link to='/'>PROMOTIONS</Link></li>
                                <li> <Link to='/'>FIND A STORE</Link></li>
                                <li> <Link to='/'>SIGN UP FOR EMAIL</Link></li>
                                <li> <Link to='/'>BECOME A MEMBER</Link></li>
                                <li> <Link to='/'>NIKE JOURNAL</Link></li>
                                <li> <Link to='/'>SEND US FEEDBACK</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3>About Sneakers</h3>
                            <ul className="footer-menu">
                                <li> <Link to='/'>About Us</Link></li>
                                <li> <Link to='/'>News</Link></li>
                                <li> <Link to='/'>Careers</Link></li>
                                <li> <Link to='/'>Investors</Link></li>
                                <li> <Link to='/'>Purpose</Link></li>
                                <li> <Link to='/'>NIKE JOURNAL</Link></li>
                                <li> <Link to='/'>Sustainability</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3>Newsletter</h3>
                            <form>
                                <p>They are way more than, they are gear for sxaling backyard alps. Layer up in our best gifts ever.</p>
                                <input type="email" placeholder="Enter Email" className="form-control mb-2" autoComplete="off" />
                                <a href="" className="btn btn-outline-light btn-lg">Subscribe</a>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <div className="py-4 mt-auto" style={{ background: '#000000' }}>
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Sneaker 2021</div></div>
                        <div className="col-auto">
                            <span>Privacy</span>

                            <span className="text-white mx-1">&middot;</span>

                            <span>Terms</span>

                            <span className="text-white mx-1">&middot;</span>

                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;