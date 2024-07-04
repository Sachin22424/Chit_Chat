const express = require('express');
const { registerUser, loginUser, findUser, getUser } = require("../Controllers/userController");

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/find/:id', findUser);  // Note: The parameter name here should match the one used in findUser
router.get('/', getUser);

module.exports = router;
