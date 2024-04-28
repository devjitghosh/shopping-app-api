"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const itemSchema = new mongoose_1.default.Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, 'Item must have a name']
    },
    price: {
        type: Number,
        required: [true, 'Item must have a price']
    }
});
const itemModel = mongoose_1.default.model('Item', itemSchema);
exports.default = itemModel;
