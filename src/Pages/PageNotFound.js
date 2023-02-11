import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';

const PageNotFound = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>404 Error !</h1>
                    <h4>Page Not Found</h4>
                    <div className="error-details">
                        Sorry. The requested page cannot be found.
                    </div>
                    <div className="error-actions">
                        <Link to="/home" className="btn btn-outline-primary btn-lg">
                            <AiFillHome /> Home
                        </Link>
                        <Link className="btn btn-outline-primary btn-lg">
                            <BsFillEnvelopeOpenFill /> Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound