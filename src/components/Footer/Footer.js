import React from 'react';
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';



const Footer = () => {
    return (
        <footer className='container'>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <img src={logo} alt="" className='footerlogo' />
                    <p>We are here to serve the humanity. Peoples life are our outmost priority. We serve with love and care.</p>
                    <div className="footer-contact">
                        <div className="footer-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='footer-text'>
                            <h6>Contact us</h6>
                            <h4>+4423564136</h4>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Our Team</a></li>
                    </ul>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <h2>Quick Services</h2>
                    <ul>
                        <li><a href="#">Pediatrics</a></li>
                        <li><a href="#">Cardiology</a></li>
                        <li><a href="#">Neurology </a></li>
                        <li><a href="#">Urology</a></li>
                        <li><a href="#">Dental</a></li>
                        <li><a href="#">Orthopedic</a></li>
                    </ul>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <h2>Subscribe</h2>
                    <form>
                        <input type="email" placeholder='Enter Email' />
                        <button type="submit">Subscribe Now</button>
                    </form>
                    <ul className='social'>
                        <li> <a href="#"><AiFillFacebook /></a></li>
                        <li> <a href="#"><AiFillTwitterSquare /></a></li>
                        <li> <a href="#"><AiFillLinkedin /></a></li>
                        <li> <a href="#"><AiFillYoutube /></a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <span>© Tasbiha 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer