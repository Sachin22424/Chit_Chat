import React from "react";
import '../assets/Navbar.css'; // Ensure you import the CSS file
import logo from '../assets/logo.png'; // Adjusted path to logo.png

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">
                    <img src={logo} alt="Icon" className="navbar-icon" />
                    Chit Chat
                </a>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id="links">
                        <li className="nav-item">
                            <a className="nav-link active text-white mx-3" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white mx-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white mx-3" href="#">Contact</a>
                        </li>
                    </ul>
                    <a href="/login" className="btn btn-outline-light login-btn" style={{ width: '80px' }}>Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
