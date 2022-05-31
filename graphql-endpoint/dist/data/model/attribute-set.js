"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeType = void 0;
var AttributeType;
(function (AttributeType) {
    AttributeType["text"] = "text";
    AttributeType["swatch"] = "swatch";
})(AttributeType = exports.AttributeType || (exports.AttributeType = {}));
var AttributeSet = /** @class */ (function () {
    function AttributeSet(name) {
        this.name = name;
        this.items = [];
        this.type = AttributeType.text;
        this.id = name;
    }
    AttributeSet.prototype.addItem = function (item) {
        this.items.push(item);
        return this;
    };
    AttributeSet.prototype.addItemList = function (items) {
        var _a;
        (_a = this.items).push.apply(_a, items);
        return this;
    };
    AttributeSet.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    return AttributeSet;
}());
exports.default = AttributeSet;
