import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import airImage from './Images/logo.jpg'

function Footer() {
  return (
    <footer className="border-top" style={{marginTop : '64px'}}>
      <div className="container py-6">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <Link to="/" className="d-flex align-items-center">
              <img
                src={airImage}
                className="mr-3 h-16"
                alt="Logo"
                style={{width : '25%', borderRadius : '10px', paddingTop : "40px"}}
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h3>
                <ul className="list-unstyled text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="/contact" className="text-reset text-decoration-none">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-reset text-decoration-none">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Follow us</h3>
                <ul className="list-unstyled text-gray-500 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://github.com/Chumuitripura45"
                      className="text-reset text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                      <Link to="/" className="text-reset text-decoration-none">
                          LinkedIn
                      </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h3>
                <ul className="list-unstyled text-gray-500 font-medium">
                  <li className="mb-2">
                    <Link to="#" className="text-reset text-decoration-none">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-reset text-decoration-none">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 text-center text-md-left">
            <span className="text-sm">
              © 2023{' '}
              <a href="https://github.com/Chumuitripura45/" className="text-reset text-decoration-none">
                AirLine Reservation 
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="col-md-6 text-center">
            <div className="d-flex justify-content-center justify-content-md-end">
              <Link to="#" className="text-gray-500 mr-3">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="#" className="mr-3">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="#" className=" mr-3">
                <i className="bi bi-github"></i>
              </Link>
              <Link to="#" className="">
                <i className="bi bi-dribbble"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
