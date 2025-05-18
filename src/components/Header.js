import React from 'react';
import { Link } from 'react-router-dom';
import './headerfooter.css';
import plogo from '../images/plogo.png';
import Top from './Top';

function Header() {
  return (
    <header>
      <Top />
      <nav className="navbar navbar-expand-lg navbar-dark ftco-navbar-light">
        <div className="container">
          <div>
          <img src={plogo} className="logo" alt="logo" />
          <a className="navbar-brand" href='https://example.com' style={{pointerEvents: 'none'}}>Phoenix Foundation</a>
          </div>

          {/* <div className="collapse navbar-collapse" id="ftco-nav"> */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/campaign">Campaign</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/member">Member</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item button">
                <Link className="nav-link" to="/donate">Donate</Link>
              </li>
            </ul>
          {/* </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
