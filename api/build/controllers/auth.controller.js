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
exports.signIn = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
// SIGN UP
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, phoneNumber, password } = req.body;
    try {
        const userExist = yield models_1.UserModel.find({ email: email });
        if (userExist.length) {
            return res.status(401).json({
                message: `${email} и-мэйлтэй хэрэглэгч өмнө бүртгэгдсэн байна`,
            });
        }
        const user = yield models_1.UserModel.create({
            userName,
            email,
            phoneNumber,
            password,
            updatedAt: new Date(),
            createdAt: new Date(),
        });
        return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.signUp = signUp;
// SIGN IN
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield models_1.UserModel.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                message: "Бүртгэлтэй хэрэглэгч олдсонгүй",
            });
        }
        const userpassword = yield models_1.UserModel.findOne({ password: password });
        if (!userpassword) {
            return res.status(401).json({
                message: "Нууц үг буруу байна",
            });
        }
        const id = user._id;
        const token = jsonwebtoken_1.default.sign({ id }, "secret-key");
        return res.json({ token, message: "Амжилттай нэвтэрлээ" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.signIn = signIn;
