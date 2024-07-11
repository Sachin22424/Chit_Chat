import React, { useContext } from "react";
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from "../context/AuthContext";
import profile from '../assets/profile2.png';

const UserChat = ({ chat, user: currentUser, onlineUsers }) => {
  const { recipientUser } = useFetchRecipientUser(chat, currentUser);
  const { updateCurrentChat } = useContext(ChatContext);
  
  const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

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
          .user-online {
            background-color: #00ff00;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            margin-left: -10px;
            margin-top: 10px;
          }
        `}
      </style>
      <div className="user-card" onClick={() => updateCurrentChat(chat)}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img src={profile} alt="Profile" className="profile-icon" />
            {isOnline && <div className="user-online"></div>}
            <div className="text-content">
              <div className="name">{recipientUser?.name || chat.name}</div>
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
    </>
  );
};

export default UserChat;
