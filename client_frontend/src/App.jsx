import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const hideNavbarAndFooter = isLoginPage || isRegisterPage;

  const { user } = useContext(AuthContext);

  return (
    <>
      <ChatContextProvider user={user}>
        {!hideNavbarAndFooter && <Navbar />}
        
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          {/* <Route path="/potential-chats" element={<PotentialChats />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    
        {!hideNavbarAndFooter && <Footer />}
      </ChatContextProvider>
    </>
  );
}

export default App;
