import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CssAll/HeaderStyle.css";
import logo from "./Images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    const storedUserRole = localStorage.getItem("role");
    if (token && storedUsername) {
      setLoggedIn(true);
      setUsername(storedUsername);
      setUserRole(storedUserRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="navbar navbar-expand-lg navbar-light border-grey-200 px-4 lg:px-6 py-2.5 fixed-top" style={{backgroundColor:"white", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
        <div className="container-fluid border-4 border-primary " style={{backgroundColor:"white"}}>
          <a class="navbar-brand" href="#" style={{backgroundColor:"white"}}>
            <img src={logo} className="imagePart" alt="Logo" />
          </a>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav" style={{backgroundColor:"white"}}>
            <ul className="navbar-nav flightlink">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/" style={{backgroundColor:"white"}}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/flight" style={{backgroundColor:"white"}}>
                  Flight
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="flightlink nav-link" to="/about" style={{backgroundColor:"white"}}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="flightlink nav-link" to="/contact" style={{backgroundColor:"white"}}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="flightlink nav-link" to="/mybooking" style={{backgroundColor:"white"}}>
                  MyBooking
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="ml-auto d-flex" style={{backgroundColor:"white"}}>
            {loggedIn ? (
              <>
                <div className="d-flex" style={{ marginTop: "9px" }}>
                  <FontAwesomeIcon icon={faUser} className="fa-lg me-2 fa-fw" />
                  {userRole === "admin" && ( 
                    <NavLink className="text-white nav-link" to="/dashboard">
                      <span
                      className="text-black"
                      style={{ marginRight: "15px" }}>
                      {username}
                    </span>
                    </NavLink>
                ) || userRole === "customer" && (
                  <NavLink className="text-white nav-link">
                  <span
                  className="text-black"
                  style={{ marginRight: "15px" }}>
                  {username}
                </span>
                </NavLink>
                )}
                </div>
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "15px" }}>
                  <NavLink className="text-white nav-link" to="/signUp">
                    Signup
                  </NavLink>
                </button>
                <button className="btn btn-primary">
                  <NavLink className="text-white nav-link" to="/login">
                    Login
                  </NavLink>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
