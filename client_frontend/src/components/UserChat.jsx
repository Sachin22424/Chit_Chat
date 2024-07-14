import React, { useContext } from "react";
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from "../context/AuthContext";
import profile from '../assets/profile2.png';

const UserChat = ({ chat, user: currentUser, onlineUsers }) => {
  const { recipientUser } = useFetchRecipientUser(chat, currentUser);
  const { updateCurrentChat, notifications } = useContext(ChatContext);
  
  const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

  const unreadMessages = notifications.filter(notification => 
    notification.senderId === recipientUser?._id && !notification.isRead
  );

  const latestReadMessage = notifications
    .filter(notification => notification.senderId === recipientUser?._id && notification.isRead)
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

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
          .this-user-notifications {
            background-color: #097969;
            border-radius: 50%;
            color: white;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 43px;
            margin-top: 5px;
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
          <div className="date">
            {latestReadMessage ? new Date(latestReadMessage.date).toLocaleDateString() : "No messages read"}
            <br />
            <div className="this-user-notifications">
              {unreadMessages.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserChat;
