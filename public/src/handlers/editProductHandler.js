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
exports.editProductHandler = void 0;
const Productos_1 = __importDefault(require("../models/Productos"));
function editProductHandler(id, productEdit) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield Productos_1.default.findById(id);
            if (!product) {
                return "Producto Inexistente";
            }
            productEdit.image ? (product.image = productEdit.image) : null;
            productEdit.name ? (product.name = productEdit.name) : null;
            productEdit.description ? (product.description = productEdit.description) : null;
            productEdit.brand ? (product.brand = productEdit.brand) : null;
            productEdit.price ? (product.price = productEdit.price) : null;
            productEdit.category ? (product.category = productEdit.category) : null;
            productEdit.type ? (product.type = productEdit.type) : null;
            productEdit.stock ? (product.stock = productEdit.stock) : null;
            productEdit.availeble_colors ? (product.available_colors = productEdit.availeble_colors) : null;
            productEdit.sizes ? (product.sizes = productEdit.sizes) : null;
            yield product.save();
            return product;
        }
        catch (error) {
            throw error; // Lanzar el error para que sea manejado en el bloque catch del controlador
        }
    });
}
exports.editProductHandler = editProductHandler;
