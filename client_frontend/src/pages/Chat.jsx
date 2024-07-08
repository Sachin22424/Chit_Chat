import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "../assets/Chat.css";
import slider1 from "../assets/slider1.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Stack } from "react-bootstrap";
import Navbar from "../components/Navbar";

const Chat = () => {
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, userChatsError } = useContext(ChatContext);
    console.log("user chats: ", userChats);

    return (
        <div className="d-flex">
            {user && <Navbar />}
            <div className="flex-grow-1">
                {user ? (
                    userChats && userChats.length > 0 ? (
                        <div className="container" style={{ marginLeft: "200px", paddingTop: "20px" }}>
                            <Stack direction="horizontal" gap={4}>
                                <Stack>List</Stack>
                                <Stack>Chat Box</Stack>
                            </Stack>
                        </div>
                    ) : (
                        <p>No chats available</p>
                    )
                ) : (
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
                                            <span style={{ marginLeft: "8px" }}>Text Chat</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <img src={slider1} alt="Chat" className="img-fluid reduced-size" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
