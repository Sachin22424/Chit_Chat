import React, { useContext, useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';
import '../assets/Notifications.css';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { unreadNotificationsFunction } from '../utils/unreadNotifications';

const Notifications = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const { notifications, allUsers, setNotifications, userChats, updateCurrentChat } = useContext(ChatContext);
    const notificationBoxRef = useRef(null);

    const unreadNotifications = unreadNotificationsFunction(notifications);

    const aggregatedNotifications = unreadNotifications.reduce((acc, curr) => {
        const sender = allUsers.find(u => u._id === curr.senderId);
        const formattedDate = new Date(curr.date).toLocaleString();
        if (!acc[curr.senderId]) {
            acc[curr.senderId] = {
                sender,
                count: 1,
                latestDate: formattedDate,
                text: `${sender?.name} sent you a message`,
            };
        } else {
            acc[curr.senderId].count += 1;
            acc[curr.senderId].latestDate = formattedDate; // Update to the latest date
        }
        return acc;
    }, {});

    const modifiedNotifications = Object.values(aggregatedNotifications);

    const toggleNotificationBox = () => {
        setIsOpen(!isOpen);
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
        setIsOpen(false);
    };

    const handleNotificationClick = (notification) => {
        const chat = userChats.find(chat => chat.members.includes(notification.sender._id));
        if (chat) {
            updateCurrentChat(chat);
            setNotifications(prevNotifications =>
                prevNotifications.map(n => n.senderId === notification.sender._id ? { ...n, isRead: true } : n)
            );
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event) => {
        if (notificationBoxRef.current && !notificationBoxRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <li className="nav-item" onClick={toggleNotificationBox}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <FaBell className="navbar-icon" />
                    <span>Alerts</span>
                </a>
            </li>

            {isOpen && (
                <div className="notification-box" ref={notificationBoxRef}>
                    <div className="notification-header">
                        <h3>Notifications</h3>
                        <div className="mark-as-read" onClick={markAllAsRead}>
                            Mark all as read
                        </div>
                    </div>
                    <div className="notification-list">
                        {modifiedNotifications.map((notification, index) => (
                            <div
                                key={index}
                                className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
                                onClick={() => handleNotificationClick(notification)}
                            >
                                {notification.text} <span className="count-circle">{notification.count}</span>
                                <div className="notification-date">{notification.latestDate}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Notifications;