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
exports.editProduct = exports.deleteProduct = exports.uploadProduct = exports.filterProducts = exports.idProduct = exports.pageProducts = exports.allProducts = exports.apiBase = void 0;
const Productos_1 = __importDefault(require("../models/Productos"));
const paginationHandler_1 = require("../handlers/paginationHandler");
const editProductHandler_1 = require("../handlers/editProductHandler");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { URL_HOST } = process.env;
const apiBase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ products: `${URL_HOST}/api/v1/product` });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.apiBase = apiBase;
const allProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Productos_1.default.find({});
        const totalResults = result.length;
        // allCreate()
        res.status(200).json({ TotalResults: totalResults, results: result });
        // res.status(200).json(result)
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.allProducts = allProducts;
const pageProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page } = req.query;
        let pageNumber = page ? Number(page) : 1;
        const products = yield Productos_1.default.find({});
        const productsData = products.map(product => product.toObject());
        const productsInPage = (0, paginationHandler_1.paginationHandler)(productsData, pageNumber);
        const totalResults = productsInPage.length;
        const pages = Math.ceil(products.length / 20);
        res.status(200).json({ info: { totalResults: totalResults,
                pages: pages,
                currentPage: Number(page),
                nextPage: pageNumber > pages || pageNumber === pages ? null : `${URL_HOST}/api/v1/product/?page=${pageNumber < 0 ? pageNumber = 1 : pageNumber + 1}`,
                prevPage: pageNumber - 1 === 0 || pageNumber <= 0 ? null : `${URL_HOST}/api/v1/product/?page=${pageNumber > pages ? pageNumber = pages : pageNumber - 1}`
            },
            results: pageNumber !== pages + 1 ? productsInPage : null });
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.pageProducts = pageProducts;
const idProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Productos_1.default.findById(id);
        res.status(200).json({ results: result });
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.idProduct = idProduct;
const filterProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const { category } = req.query;
        const { type } = req.query;
        const { brand } = req.query;
        if (!name && !category && !brand && !type) {
            res.status(200).json({ message: "Error Query" });
        }
        const allProducts = yield Productos_1.default.find({});
        const productsFiltred = allProducts.filter((product) => {
            var _a, _b, _c, _d;
            return (name && ((_a = product.name) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase().includes(name.toString().toLowerCase()))) ||
                (category && ((_b = product.category) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase().includes(category.toString().toLowerCase()))) ||
                (type && ((_c = product.type) === null || _c === void 0 ? void 0 : _c.toString().toLowerCase().includes(type.toString().toLowerCase()))) ||
                (brand && ((_d = product.brand) === null || _d === void 0 ? void 0 : _d.toString().toLowerCase().includes(brand.toString().toLowerCase())));
        });
        res.status(200).json({ totalResults: productsFiltred.length, results: productsFiltred });
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.filterProducts = filterProducts;
const uploadProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productPost = req.body;
        const result = yield Productos_1.default.create(productPost);
        res.status(200).json({ successCreate: result });
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.uploadProduct = uploadProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Productos_1.default.findByIdAndDelete(id);
        if (!result) {
            res.status(200).json({ successDelete: "Product No Exist" });
        }
        else {
            res.status(200).json({ successDelete: result });
        }
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.deleteProduct = deleteProduct;
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = req.body;
        if (!product.name &&
            !product.image &&
            !product.description &&
            !product.brand &&
            !product.price &&
            !product.category &&
            !product.type &&
            !product.sizes &&
            !product.stock &&
            !product.availeble_colors) {
            return null;
        }
        const result = yield (0, editProductHandler_1.editProductHandler)(id, product);
        res.status(200).json({ successEdit: result });
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.editProduct = editProduct;
