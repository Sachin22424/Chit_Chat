import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading, messagesError } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);

  if (!recipientUser) {
    return (
      <div style={{ textAlign: "center", width: "100%" }}>
        <p>No chat selected</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Chat with {recipientUser.name}</h2> {/* Display recipient's name */}
      <div>Component Chat Box</div>
    </div>
  );
};

export default ChatBox;
