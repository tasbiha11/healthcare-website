import React from 'react'
import Banner from '../components/Banner/Banner';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillEnvelopeFill, BsGlobe, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import './Contact.css';
import FormContact from './FormContact';

const Contact = () => {
    return (
        <>
            <Banner title="Contact" smtitle="contact" />
            <section className='contact-us'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-6 col-md-6'>
                            <FormContact />
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='side'>
                                <div className="overlay">
                                    <h3>Contact us for any information</h3>
                                    <li><HiLocationMarker />Location</li>
                                    <hr />
                                    <p>111 Health Street, South Lane, Tea City, Bangladesh</p>
                                    <li><BsFillEnvelopeFill /> Email and Phone</li>
                                    <hr />
                                    <p>meditrio@health.com</p>
                                    <p>+846149536464</p>
                                    <li><BsGlobe /> Follow us</li>
                                    <hr />
                                    <ul>
                                        <li><BsFacebook /></li>
                                        <li><BsTwitter /></li>
                                        <li><BsYoutube /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact