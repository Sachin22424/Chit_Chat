const userModel = require('../Models/userModel');
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: true, message: "Please fill all fields" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: true, message: "Please enter valid email" });
        }

        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ error: true, message: "Password must be 8 characters long with at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol" });
        }

        let user = await userModel.findOne({ email });

        if (user) {
            return res.status(400).json({ error: true, message: "User already registered" });
        }

        user = new userModel({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const token = createToken(user._id);

        res.status(200).json({ _id: user._id, name, email, token });
    } catch (err) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: true, message: "Invalid Credentials" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({ error: true, message: "Invalid Credentials" });
        }

        const token = createToken(user._id);

        res.status(200).json({ _id: user._id, name: user.name, email, token });
    } catch (err) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
};

const findUser = async (req, res) => {
    const userID = req.params.id;
    // console.log(`Finding user with ID: ${userID}`);  // Log the user ID

    try {
        const user = await userModel.findById(userID);
        if (!user) {
            return res.status(404).json({ error: true, message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error in findUser: ", err);  // Log any errors
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
};

module.exports = { registerUser, loginUser, findUser, getUser };

const deleteUser = async (req, res) => {
    const userID = req.params.id;
    console.log(`Deleting user with ID: ${userID}`);  // Log the user ID

    try {
        const user = await userModel.findByIdAndDelete(userID);
        if (!user) {
            return res.status(404).json({ error: true, message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error("Error in deleteUser: ", err);  // Log any errors
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
};

module.exports = { registerUser, loginUser, findUser, getUser, deleteUser };
