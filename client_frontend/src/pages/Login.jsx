import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../assets/Login.css';
import X from '../assets/cross.png';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="header-container">
                    <a href="/">
                        <img src={X} alt="Chat" className="login-img" />
                    </a>
                    <h1 className="login-title">Login</h1>
                </div>
                <form>
                    <div className="form-group my-4">
                        <label htmlFor="email" className="label-large">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-1">
                        <label htmlFor="password" className="label-large">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 mb-2">Login</button>
                </form>
                <p className="mt-3">
                    New to Chit Chat? <a href="/register" className="link-primary">Get Started</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
