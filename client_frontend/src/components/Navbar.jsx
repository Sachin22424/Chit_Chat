import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../assets/Navbar.css'; 
import logo from '../assets/logo.png'; 

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("User");
        setUser(null);
        navigate("/login");
    };

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
                    {user ? (
                        <>
                            <button onClick={handleLogout} className="btn btn-outline-light login-btn" style={{ width: '80px' }}>Logout</button>
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Successfully logged in as {user.email}</strong>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </>
                    ) : (
                        <a href="/login" className="btn btn-outline-light login-btn" style={{ width: '80px' }}>Login</a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
