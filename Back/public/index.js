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
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./src/db"));
const productsData_1 = __importDefault(require("./src/utils/productsData"));
dotenv_1.default.config();
const { PORT } = process.env || 3001;
try {
    app_1.default.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Server listening on port ${PORT}`);
        yield db_1.default;
        yield (0, productsData_1.default)();
    }));
}
catch (error) {
    console.error("Error during startup:", error);
}
