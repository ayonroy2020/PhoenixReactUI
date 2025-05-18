import React from 'react';
import './top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter,faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Top(){
    return(
        <div className='contaner'>
            <div className="row">
				<div className="col-md-6 d-flex align-items-center">
					<p className="mb-0 phone pl-md-2">
						<a href='https://example.com' ><FontAwesomeIcon icon={faPhone} /> +91 9163630763</a> 
						<a href='https://example.com' ><FontAwesomeIcon icon={faPaperPlane} /> info@phoenixngo.org</a>
					</p>
				</div>
				<div className="col-md-6 d-flex justify-content-md-end">
                <div className="social-media">
                    <ul className="mb-0 d-flex list-unstyled">
                        <li className="d-flex align-items-center justify-content-center mx-2">
                        <Link className="nav-link" to="https://www.facebook.com/Phoenix.Official.NGO"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                        </li>
                        <li className="d-flex align-items-center justify-content-center mx-2">
                        <Link className="nav-link" to="https://twitter.com/Phoenix33316448"><FontAwesomeIcon icon={faTwitter} /></Link>
                        </li>
                        <li className="d-flex align-items-center justify-content-center mx-2">
                        <Link className="nav-link" to="https://www.instagram.com/phoenix.official.ngo/"><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                        </li>
                        <li className="d-flex align-items-center justify-content-center mx-2">
                        <Link className="nav-link" to="https://www.instagram.com/phoenix.official.ngo/"><FontAwesomeIcon icon={faLinkedin}  /></Link>
                        </li>
                    </ul>
                    </div>
				</div>
			</div>
        </div>
    );
}

export default Top;