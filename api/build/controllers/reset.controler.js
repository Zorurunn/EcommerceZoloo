"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserPassword = exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const models_1 = require("../models");
// SENDEMAIL
const sendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const user = yield models_1.UserModel.findOne({ email: email });
    if (!user) {
        return res.status(401).json({
            message: "Хэрэглэгч олдсонгүй",
        });
    }
    const otpCode = Math.floor(Math.random() * 10000);
    try {
        const transporter = nodemailer_1.default.createTransport({
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
        yield transporter.sendMail(mailOptions);
        const checkotb = yield models_1.UserModel.updateOne({
            _id: user.id,
        }, { $set: { otp: otpCode } });
        res.json({ message: `Нэг удаагын код ${email}-руу амжилттай илгээгдлээ` });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.sendEmail = sendEmail;
// RESETPASSWORD
const reserPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, code, newPassword } = req.body;
    const user = yield models_1.UserModel.findOne({ email: email, otp: code });
    if (!user) {
        return res.status(401).json({
            message: "Нэг удаагийн код буруу байна.",
        });
    }
    try {
        if (user.otp == code) {
            yield models_1.UserModel.updateOne({ email: email }, {
                password: newPassword,
                updatedAt: new Date(),
            });
        }
        res.json({ message: "Хэрэглэгчийн нууц үг шинэчлэгдсэн" });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.reserPassword = reserPassword;
