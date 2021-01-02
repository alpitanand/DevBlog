const { save } = require("../dao/user");
const { findUserByEmail } = require("../dao/user");
const _ = require("lodash");
const { genSalt, compare, hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  saveUser: async (req, res, next) => {
    try {
      let { email, password, name } = req.body;
      let user = {
        email,
        password,
        name,
      };
      return res.json(await save(user));
    } catch (error) {
      next(error);
    }
  },

  registerUser: async (req, res, next) => {
    try {
      let { email, password, name } = req.body;

      if (_.isEmpty(email) || _.isEmpty(password) || _.isEmpty(name))
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered." });

      if (password.length < 5)
        return res.status(400).json({
          msg: "The password needs to be at least 5 characters long.",
        });
      const existingUser = await findUserByEmail(email);
      if (!_.isEmpty(existingUser)) {
        return res.status(400).json({
          msg: "An account with this email already exists.",
        });
      }

      const salt = await genSalt(10);
      const passwordHash = await hash(password, salt);
      const newUser = {
        email,
        hashedPassword: passwordHash,
        name,
      };
      return res.json(await save(newUser));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Some error occured while registering, please try again later",
      });
    }
  },

  loginUser: async (req, res) => {
    try {
      let { email, password } = req.body;

      if (_.isEmpty(email) || _.isEmpty(password))
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered." });

      if (password.length < 5)
        return res.status(400).json({
          msg: "The password needs to be at least 5 characters long.",
        });

      const isUserPresent = await findUserByEmail(email);

      if (_.isEmpty(isUserPresent)) {
        return res.status(400).json({
          msg: "An account with this email is not present",
        });
      }

      const isMatch = await compare(password, isUserPresent.hashedPassword);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials." });
      }
      const token = await sign({ email}, JWT_SECRET);
      res.json({
        token,
        email,
        name: isUserPresent.name  
      })

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Some error occured while login in, please try again later",
      });
    }
  },
};
