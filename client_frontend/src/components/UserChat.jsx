import React, { useContext } from "react";
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from "../context/AuthContext";
import profile from '../assets/profile2.png';

const UserChat = ({ chat, user: currentUser }) => {
  const { recipientUser } = useFetchRecipientUser(chat, currentUser);
  const { potentialChats, createChat, updateCurrentChat } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      <style>
        {`
          .profile-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
          }
        `}
      </style>
      <div>
        <div className="user-card" onClick={() => updateCurrentChat(chat)}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img src={profile} alt="Profile" className="profile-icon" />
              <div className="user-online"></div>
              <div className="text-content">
                <div className="name">{recipientUser?.name}</div>
                <div className="text">Last message...</div>
              </div>
            </div>
            <div className="date">12/22/2024 <br />
              <div className="this-user-notifications" style={{
                backgroundColor: '#097969',
                borderRadius: '50%',
                color: 'white',
                width: '25px',
                height: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '43px',
                marginTop: '5px',
              }}>2</div>
            </div>
          </div>
        </div>

        <div className="users-column1">
          <br />
          {potentialChats.map((potentialChat, index) => (
            <div key={index} className="all-users p-3">
              <div className="user-card" onClick={() => createChat(user._id, potentialChat._id)}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={potentialChat.profilePicture} alt="Profile" className="profile-icon" />
                    <div className="user-online"></div>
                    <div className="text-content">
                      <div className="name">{potentialChat.name}</div>
                      <div className="message-preview">{potentialChat.lastMessage}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserChat;