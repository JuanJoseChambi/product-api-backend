"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductsApi = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    available_colors: {
        type: [String]
    },
    sizes: {
        type: [String]
    }
}, { timestamps: true, versionKey: false });
const ProductoApi = mongoose_1.default.model("productos", ProductsApi);
exports.default = ProductoApi;
