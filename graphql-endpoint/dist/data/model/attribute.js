"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attribute = /** @class */ (function () {
    function Attribute(displayValue, value, id) {
        this.displayValue = displayValue;
        this.value = value;
        this.id = id;
        if (!value) {
            this.value = displayValue;
        }
        if (!id) {
            this.id = displayValue;
        }
    }
    return Attribute;
}());
exports.default = Attribute;
