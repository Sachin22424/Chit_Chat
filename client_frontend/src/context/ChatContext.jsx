import { createContext, useState, useEffect } from "react";
import { baseURL, getRequest , postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);

    const [potentialChats, setPotentialChats] = useState([]); // Added potentialChats state

    useEffect(() => {
        const getUsers = async () => {
            const response = await getRequest(`${baseURL}/user`);
            
            if (response.error) {  
                return console.error("Error fetching users: ", response.error);
            }

            const pChats = response.filter((u) =>{
                let isChatCreated = false;
                if(user._id === u._id) return false
                

                if(userChats){
                    isChatCreated = userChats.some((chat) => {
                        return chat.members[0] === u._id || chat.members[1] === u._id
                    })
                }

                return !isChatCreated
            }
            ); // Filter out the current user

            setPotentialChats(pChats);
        };
    
        getUsers();
    }, [userChats]); // Added 'user' as a dependency if you want this effect to run when 'user' changes

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
        <ChatContext.Provider value={{ userChats, setUserChats, isUserChatsLoading, setIsUserChatsLoading, userChatsError, setUserChatsError , potentialChats }}>
            {children}
        </ChatContext.Provider>
    );
};
