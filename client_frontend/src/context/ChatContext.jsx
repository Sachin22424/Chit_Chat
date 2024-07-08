import { createContext, useState, useEffect } from "react";
import { baseURL, getRequest , postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(`${baseURL}/chat/${user?._id}`);

                setIsUserChatsLoading(false);

                if (response.error) {
                    setUserChatsError(response);
                } else {
                    setUserChats(response);
                }
            }
        };

        getUserChats();
    }, [user]);

    return (
        <ChatContext.Provider value={{ userChats, setUserChats, isUserChatsLoading, setIsUserChatsLoading, userChatsError, setUserChatsError }}>
            {children}
        </ChatContext.Provider>
    );
};
