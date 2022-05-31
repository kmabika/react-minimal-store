"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
var product_1 = __importDefault(require("./model/product"));
var type_1 = require("./type");
var descriptions_1 = require("./items/descriptions");
var attribute_set_1 = __importStar(require("./model/attribute-set"));
var attribute_1 = __importDefault(require("./model/attribute"));
var shoeSizes = new attribute_set_1.default('Size')
    .addItemList([
    new attribute_1.default('40'),
    new attribute_1.default('41'),
    new attribute_1.default('42'),
    new attribute_1.default('43')
]);
var clothesSizes = new attribute_set_1.default('Size')
    .addItemList([
    new attribute_1.default('Small', 'S'),
    new attribute_1.default('Medium', 'M'),
    new attribute_1.default('Large', 'L'),
    new attribute_1.default('Extra Large', 'XL')
]);
var colors = new attribute_set_1.default('Color')
    .setType(attribute_set_1.AttributeType.swatch)
    .addItemList([
    new attribute_1.default('Green', '#44FF03'),
    new attribute_1.default('Cyan', '#03FFF7'),
    new attribute_1.default('Blue', '#030BFF'),
    new attribute_1.default('Black', '#000000'),
    new attribute_1.default('White', '#FFFFFF')
]);
var yesNo = [new attribute_1.default('Yes'), new attribute_1.default('No')];
var capacity = new attribute_set_1.default('Capacity')
    .addItemList([
    new attribute_1.default('512G'),
    new attribute_1.default('1T')
]);
var products = [
    new product_1.default('Nike Air Huarache Le')
        .setId('huarache-x-stussy-le')
        .setPrice(120)
        .setDescription('<p>Great sneakers for everyday use!</p>')
        .addImages([
        'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
        'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087',
        'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087',
        'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087',
        'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'
    ])
        .setCategory(type_1.Category.clothes)
        .setBrand('Nike x Stussy')
        .addAttributeSet(shoeSizes),
    new product_1.default('Jacket')
        .setId('jacket-canada-goosee')
        .setPrice(430)
        .addImages([
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
        'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
        'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png',
        'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'
    ])
        .addAttributeSet(clothesSizes)
        .setBrand('Canada Goose')
        .setDescription('<p>Awesome winter jacket</p>')
        .setCategory(type_1.Category.clothes),
    new product_1.default('PlayStation 5')
        .setId('ps-5')
        .setPrice(700)
        .addImages([
        'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'
    ])
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setBrand('Sony')
        .setInStock(false)
        .setDescription('<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>')
        .setCategory(type_1.Category.tech),
    new product_1.default('Xbox Series S 512GB')
        .setId('xbox-series-s')
        .setPrice(277)
        .addImages([
        'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'
    ])
        .setBrand('Microsoft')
        .setInStock(false)
        .addAttributeSet(colors)
        .addAttributeSet(capacity)
        .setDescription(descriptions_1.xboxDescription)
        .setCategory(type_1.Category.tech),
    new product_1.default('iMac 2021')
        .setId('apple-imac-2021')
        .setPrice(1400)
        .setBrand('Apple')
        .addImages([
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000'
    ])
        .addAttributeSet(new attribute_set_1.default('Capacity')
        .addItem(new attribute_1.default('256GB'))
        .addItem(new attribute_1.default('512GB')))
        .setDescription('The new iMac!')
        .addAttributeSet(new attribute_set_1.default('With USB 3 ports').addItemList(yesNo))
        .addAttributeSet(new attribute_set_1.default('Touch ID in keyboard').addItemList(yesNo))
        .setCategory(type_1.Category.tech),
    new product_1.default('iPhone 12 Pro')
        .setId('apple-iphone-12-pro')
        .setPrice(830)
        .setBrand('Apple')
        .setDescription('This is iPhone 12. Nothing else to say.')
        .addImages([
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000'
    ])
        .addAttributeSet(capacity)
        .addAttributeSet(colors)
        .setCategory(type_1.Category.tech),
    new product_1.default('AirPods Pro')
        .setId('apple-airpods-pro')
        .setPrice(249)
        .setBrand('Apple')
        .addImages([
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000'
    ])
        .setInStock(false)
        .setDescription(descriptions_1.airpodsDescription)
        .setCategory(type_1.Category.tech),
    new product_1.default('AirTag')
        .setId('apple-airtag')
        .setPrice(100)
        .setBrand('Apple')
        .addImages([
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000'
    ])
        .setDescription(descriptions_1.airtagDescription)
        .setCategory(type_1.Category.tech)
];
exports.products = products;
