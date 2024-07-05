const ChatModel = require("../Models/chatModel");

const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;

    try {
        const chat = await ChatModel.findOne({ members: { $all: [firstId, secondId] } });

        if (chat) {
            return res.status(200).json({ message: "Chat already exists" });
        }

        const newChat = new ChatModel({ members: [firstId, secondId] });
        const response = await newChat.save();

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const findUserChats = async (req, res) => {
    const { userId } = req.params;

    try {
        const chats = await ChatModel.find({ members: { $in: [userId] } });
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;

    try {
        const chat = await ChatModel.find({ members: { $all: [firstId, secondId] } });
        res.status(200).json(chat);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { createChat, findUserChats, findChat };
