import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = (props) => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="row">
                    <div className='col-lg-12 clo-md-12'>
                        <h2>{props.title}</h2>
                        <li>
                            <Link to="/home">
                                <AiFillHome />Home
                            </Link>
                            {props.smtitle}
                        </li>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner