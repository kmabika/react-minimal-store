"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var currency_converter_1 = __importDefault(require("../../util/currency-converter"));
var price_1 = __importDefault(require("./price"));
var roundToTwoDecimals = function (num) { return Number((Math.round(num * 100) / 100).toFixed(2)); };
var Product = /** @class */ (function () {
    function Product(name) {
        var _this = this;
        this.name = name;
        this.prices = [];
        this.gallery = [];
        this.attributes = [];
        this.inStock = true;
        this.getId = function () { return _this.id; };
        this.getCategory = function () { return _this.category; };
    }
    Product.prototype.addPrice = function (price) {
        this.prices.push(price);
        return this;
    };
    Product.prototype.setPrice = function (amountEUR) {
        var _this = this;
        currency_converter_1.default.availableCurrencies.forEach(function (currency) {
            _this.addPrice(new price_1.default(currency, roundToTwoDecimals(currency_converter_1.default.convertFromEUR(amountEUR, currency.label))));
        });
        return this;
    };
    Product.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    Product.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Product.prototype.setInStock = function (is) {
        this.inStock = is;
        return this;
    };
    Product.prototype.setBrand = function (brand) {
        this.brand = brand;
        return this;
    };
    Product.prototype.addAttributeSet = function (attributeSet) {
        this.attributes.push(attributeSet);
        return this;
    };
    Product.prototype.addImage = function (url) {
        this.gallery.push(url);
        return this;
    };
    Product.prototype.addImages = function (urls) {
        var _a;
        (_a = this.gallery).push.apply(_a, urls);
        return this;
    };
    return Product;
}());
exports.default = Product;
