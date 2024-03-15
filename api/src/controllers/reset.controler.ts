import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      message: "Хэрэглэгч олдсонгүй",
    });
  }

  const otpCode = Math.floor(Math.random() * 10000);

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "uulaaka73@gmail.com",
        pass: "utrhxcutldbgdjuk",
      },
    });
    const mailOptions = {
      from: "uulaaka73@gmail.com",
      to: email,
      subject: "from Food Delivery",
      text: `Нэг удаагын code: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);

    const checkotb = await UserModel.updateOne(
      {
        _id: user.id,
      },
      { $set: { otp: otpCode } }
    );

    res.json(`Нэг удаагын код ${email}-рүү амжилттай илгээгдлээ`);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const sendOtp: RequestHandler = async (req, res) => {
  const { email, code, password } = req.body;

  const user = await UserModel.findOne({ email: email, otp: code });

  if (!user) {
    return res.status(401).json({
      message: "Нэг удаагын код буруу байна",
    });
  }
  try {
    if (user.otp === code) {
    }

    const userPassword = await UserModel.updateOne({ password: password });

    res.json({ message: "" });
  } catch (error) {
    res.status(500).json(error);
  }
};
