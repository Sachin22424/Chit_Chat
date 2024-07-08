const express = require('express');
const { registerUser, loginUser, findUser, getUser, deleteUser } = require("../Controllers/userController");

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/find/:id', findUser);
router.get('/', getUser);
router.delete('/delete/:id', deleteUser);  

module.exports = router;