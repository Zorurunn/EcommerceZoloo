import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";
const otpGenerator = require("otp-generator");

export const secretKey = "food delivery application secret key";
// SIGN UP
export const signUp: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await UserModel.findOne({ email: email });

  if (userExist) {
    return res.status(401).json({
      message: "This email already registered",
    });
  }

  try {
    const user = await UserModel.create({
      email,
      password,
    });

    return res.json({ message: "Account successfully created", user: user });
  } catch (error) {
    return res.status(401).json({ error: error, message: "could create user" });
  }
};

// SIGN IN
export const signIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email, password: password });

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const id = user._id;

  const token = jwt.sign(
    {
      id: id,
    },
    secretKey,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
