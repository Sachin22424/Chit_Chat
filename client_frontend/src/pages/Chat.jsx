import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css";
import slider1 from '../assets/slider1.png';

const Chat = () => {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center mb-5" id="one">
                            <h1 className="display-4 font-weight-bold">
                                Talk to Anyone<br />Make friends!
                            </h1>
                            <p className="lead">
                                Experience a random chat alternative to find friends, connect with people, and chat with strangers from all over the world!
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-primary-custom btn-lg d-flex align-items-center">
                                    <FontAwesomeIcon icon={faCommentDots} className="mr-3" />
                                    <span style={{ marginLeft: '8px' }}>Text Chat</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img src={slider1} alt="Chat" className="img-fluid reduced-size" />
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Chit Chat</h5>
                            <p>Chit Chat is a platform to make new friends, connect with people, and chat with strangers from all over the world.</p>
                        </div>
                        {/* <div className="col-md-4">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <div className="social-icons">
                                <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div> */}
                    </div>
                    <div className="copy-right">
                        &copy; 2024 Chit Chat. All rights reserved.
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Chat;