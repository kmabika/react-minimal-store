"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
var productResolver = function (_parent, args) { return data_1.products.find(function (product) { return product.getId() === args.id; }); };
exports.default = productResolver;
