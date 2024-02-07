"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHandler = void 0;
function paginationHandler(products, page) {
    const productForPage = 20;
    let productsInPage = [];
    const indexEnd = productForPage * Number(page);
    const indexStart = indexEnd - productForPage;
    productsInPage = products.slice(indexStart, indexEnd);
    return productsInPage;
}
exports.paginationHandler = paginationHandler;
