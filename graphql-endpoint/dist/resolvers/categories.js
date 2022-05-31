"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
var type_1 = require("../data/type");
var categoriesResolver = function () {
    var result = data_1.products.reduce(function (categories, product) {
        var category = product.getCategory();
        if (!categories[category]) {
            categories[category] = {
                name: category,
                products: []
            };
        }
        var _a = categories, _b = category, products = _a[_b].products;
        products.push(product);
        return categories;
    }, {});
    return __spreadArray([
        {
            name: type_1.Category.all,
            products: data_1.products
        }
    ], Object.values(result));
};
exports.default = categoriesResolver;
