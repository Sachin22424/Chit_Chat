const userModel = require('../Models/userModel');
const bcrypt = require("bcrypt")
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({_id}, jwtkey, {expiresIn: "3d"});
};

const registerUser = async (req, res) => {

    try{
        const {name, email, password} = req.body;
    
        let user = await userModel.findOne({email});

        if(user) return res.status(400).json("User already registered");

        if(!name || !email || !password) return res.status(400).json("Please fill all fields");

        if(!validator.isEmail(email)) return res.status(400).json("Please enter valid email");

        if(!validator.isStrongPassword(password)) return res.status(400).json("Password must be 8 characters long with atleast 1 lowercase, 1 uppercase, 1 number and 1 symbol");
    
        user = new userModel({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const token = createToken(user._id);

        res.status(200).json({_id: user._id, name, email , token});
    }

    catch(err){
        res.status(500).json("Internal Server Error");
    }
};

const loginUser = async (req, res) => {

    const {email, password} = req.body;

    try{

        let user = await userModel.findOne({email});

        if(!user) return res.status(400).json("Invalid Credentials");

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) return res.status(400).json("Invalid Credentials");    

        const token = createToken(user._id);

        res.status(200).json({_id: user._id, name:user.name, email , token});
    }

    catch(err){
        res.status(500).json("Internal Server Error");
    }
};

const findUser = async (req, res) => {
    const userID = req.params.id;

    try{
        const user = await userModel.findById(userID);

        res.status(200).json(user);
    }

    catch(err){
        res.status(500).json("Internal Server Error");
    }
};

const getUser = async (req, res) => {

    try{
        const user = await userModel.find();

        res.status(200).json(users);
    }

    catch(err){
        res.status(500).json("Internal Server Error");
    }
};

module.exports = {registerUser};
module.exports = {loginUser};
module.exports = {findUser};
module.exports = {getUser};