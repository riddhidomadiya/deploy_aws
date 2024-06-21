const User = require("../model/User");

exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(200).json({
        message: "data create",
        data: user,
    });
};

exports.getUser = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({
        message: "data get",
        data: users,
    });
};