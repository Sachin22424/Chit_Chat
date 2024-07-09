import React from "react";
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from 'react-bootstrap'; // Importing Stack from react-bootstrap

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  // console.log("recipientUser: ", recipientUser);

  return (
    <div className="user-card" onClick={() => { /* Your click handler logic here */ }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
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
}}>2</div></div>
      </div>
      
    </div>
  );
};

export default UserChat;

