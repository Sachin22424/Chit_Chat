import { createContext, useState, useEffect, useCallback } from "react";
import { baseURL, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);

  const [potentialChats, setPotentialChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const [messages, setMessages] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest(`${baseURL}/user`);
      if (response.error) {
        return console.error("Error fetching users: ", response.error);
      }

      const pChats = response.filter((u) => {
        let isChatCreated = false;
        if (user?._id === u._id) return false;

        if (userChats) {
          isChatCreated = userChats.some((chat) => {
            return chat.members.includes(u._id);
          });
        }

        return !isChatCreated;
      });

      setPotentialChats(pChats);
    };

    getUsers();
  }, [user, userChats]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        setUserChatsError(null);

        const response = await getRequest(`${baseURL}/chat/${user._id}`);

        setIsUserChatsLoading(false);

        if (response.error) {
          setUserChatsError(response.error);
        } else {
          setUserChats(response);
        }
      }
    };

    getUserChats();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      setIsMessagesLoading(true);
      setMessagesError(null);

      const response = await getRequest(`${baseURL}/message/${currentChat?._id}`);

      setIsMessagesLoading(false);

      if (response.error) {
        setMessagesError(response.error);
      } else {
        setMessages(response);
      }
    };

    if (currentChat) {
      getMessages();
    }
  }, [currentChat]);

  const updateCurrentChat = useCallback((chat) => {
    setCurrentChat(chat);
  }, []);

  const createChat = useCallback(async (firstId, secondId) => {
    const response = await postRequest(`${baseURL}/chat`, JSON.stringify({ firstId, secondId }));

    if (response.error) {
      return console.error("Error creating chat: ", response.error);
    } else {
      setUserChats((prev) => [...prev, response]);
    }
  }, []);

  return (
    <ChatContext.Provider value={{
      userChats, setUserChats,
      isUserChatsLoading, setIsUserChatsLoading,
      userChatsError, setUserChatsError,
      potentialChats, createChat,
      updateCurrentChat, currentChat,
      messages, isMessagesLoading, messagesError
    }}>
      {children}
    </ChatContext.Provider>
  );
};