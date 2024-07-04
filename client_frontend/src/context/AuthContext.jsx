import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { postRequest, baseURL } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: '',
    });

    console.log("userses:" , user);

    useEffect(() => {
        const user = localStorage.getItem('User');
        setUser(JSON.parse(user));
    }, []);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        try {
            const response = await postRequest(`${baseURL}/user/register`, JSON.stringify(registerInfo));

            setIsRegisterLoading(false);

            if (response.error) {
                setRegisterError(response.message);
                return false;
            }

            localStorage.setItem('User', JSON.stringify(response));
            setUser(response);
            return true;
        } catch (error) {
            setIsRegisterLoading(false);
            setRegisterError("Network error. Please try again later.");
            return false;
        }
    }, [registerInfo]);

    return (
        <AuthContext.Provider value={{ user, setUser, registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
