const express = require('express');
const { createMessage, getMessages, deleteMessages } = require('../Controllers/messageController');

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", getMessages);
router.delete("/:chatId", deleteMessages);

module.exports = router;