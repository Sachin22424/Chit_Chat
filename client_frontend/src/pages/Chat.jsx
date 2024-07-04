import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "../assets/Chat.css";
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
        </>
    );
};

export default Chat;
