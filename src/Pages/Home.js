import React from 'react';
import header_doctor from '../Assets/header_doctor.png';
import './Home.css';
import Blogs from '../components/Blogs/Blogs';
import Featured from '../components/Featured/Featured';


const Home = () => {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-lg-8'>
                        <h5>We Provide All Health Care Solution</h5>
                        <h2>Protect Your Health and Take Care of Your Health</h2>
                        <button><a href="/">Read More</a></button>
                        <span>+</span>
                    </div>
                    <div className='col-md-4 col-lg-4'>
                        <div className="header-box">
                            <img src={header_doctor} alt="doctor" />

                        </div>
                    </div>
                </div>
            </div>
            <Blogs />
            <Featured />
        </header>
    )
}

export default Home