"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_USER, DB_HOST, DB_PORT, DB_NAME } = process.env;
const db = mongoose_1.default.connect(`${DB_USER}://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    // const db = mongoose.connect(`${DB_USER}://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then(() => console.log(`DB Conected to ${DB_NAME}`))
    .catch(err => console.log("Error al conctarse a MongoDB :", err));
exports.default = db;
