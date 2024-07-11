import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/ChatBox.css'; // Import custom CSS
import profile from '../assets/profile1.png'; // Ensure the path is correct
import moment from 'moment';
import { Stack } from 'react-bootstrap'; // Ensure Bootstrap components are imported correctly
import InputEmoji from 'react-input-emoji'; // Ensure InputEmoji is imported correctly
import send from '../assets/send1.png'; // Ensure Button is imported correctly

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading, sendTextMessage } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);
  const [textMessage, setTextMessage] = useState("");

  if (!recipientUser) {
    return (
      <div className="text-center w-100 p-3 dark-mode">
        <p>No chats selected</p>
      </div>
    );
  }

  if (isMessagesLoading) {
    return (
      <div className="text-center w-100 p-3 dark-mode">
        <p>Loading messages...</p>
      </div>
    );
  }

  return (
    <>
      <div className="text-center w-100 p-3 dark-mode">
        <div className="d-flex align-items-center justify-content-start">
          <img src={profile} alt="Profile" className="profile-icon" />
          <h4 className="mx-2 mt-1">{recipientUser.name}</h4>
        </div>
      </div>
      <Stack gap={3} className="messages">
        {messages && messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.senderId === user._id ? 'sent' : 'received'}`}
          >
            <div className="message-text">{message.text}</div>
            <div className="message-time">{moment(message.createdAt).calendar()}</div>
          </div>
        ))}
      </Stack>

      <div className="message-input-container">
        <div className="d-flex align-items-center input-group-custom">
          <InputEmoji
            value={textMessage}
            onChange={setTextMessage}
            cleanOnEnter
            onEnter={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}
            placeholder="Type a message"
            className="input-emoji"
          />
          <button className="button-emoji" onClick={() => sendTextMessage(textMessage, user, currentChat._id)}>
            <img src={send} alt="send image" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
