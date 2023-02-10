import React from 'react'
import Banner from '../components/Banner/Banner';
import { HiLocationMarker } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Banner title="Contact" smtitle="contact" />
            <section className='contact-us'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-6 col-md-6'>
                            <form>
                                <div className='form-control'>
                                    <input type="text" placeholder='Your name' />
                                </div>
                                <div className='form-control'>
                                    <input type="email" placeholder='Your email' />
                                </div>
                                <div className='form-control'>
                                    <input type="text" placeholder='Your mobile' />
                                </div>
                                <select>
                                    <option>Select Department</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <div className='form-control'>
                                    <textarea placeholder='Message'></textarea>
                                </div>
                                <button>Submit</button>
                            </form>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='side'>
                                <div className="overlay">
                                    <h3>Contact us for any information</h3>
                                    <li><HiLocationMarker />Location</li>
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