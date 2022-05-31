"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var category_1 = __importDefault(require("./category"));
var categories_1 = __importDefault(require("./categories"));
var currencies_1 = __importDefault(require("./currencies"));
var product_1 = __importDefault(require("./product"));
var resolvers = {
    Query: {
        categories: categories_1.default,
        category: category_1.default,
        currencies: currencies_1.default,
        product: product_1.default
    }
};
exports.default = resolvers;
