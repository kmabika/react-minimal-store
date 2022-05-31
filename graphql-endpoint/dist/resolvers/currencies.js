"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var currency_converter_1 = __importDefault(require("../util/currency-converter"));
var currencyResolver = function () { return currency_converter_1.default.availableCurrencies; };
exports.default = currencyResolver;
