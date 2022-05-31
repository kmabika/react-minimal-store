"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
var type_1 = require("../data/type");
var categoryResolver = function (_parent, args) {
    var _a = args.input, _b = _a === void 0 ? {} : _a, title = _b.title;
    var result;
    if (!title || title === type_1.Category.all) {
        result = data_1.products;
    }
    else {
        result = data_1.products.filter(function (product) { return product.getCategory() === title; });
    }
    if (!result.length) {
        return null;
    }
    return {
        name: title ? title : type_1.Category.all,
        products: result
    };
};
exports.default = categoryResolver;
