"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        required: [true, "cart Item must have a username"],
    },
    productId: {
        type: Number,
        required: [true, "cart Item must have a product id"],
    },
    quantity: {
        type: Number,
        required: [true, "cart Item must have a quantity"],
    },
});
cartSchema.post("findOneAndUpdate", async function (doc) {
    if (doc) {
        const updatedDoc = await this.model.findOne({ _id: doc._id });
        console.log("Product updated:", updatedDoc);
        if (updatedDoc.quantity === 0) {
            console.log("DT");
            const res = await this.model.deleteOne({ productId: doc.productId });
            console.log("RES", res);
        }
    }
});
const cartModel = mongoose_1.default.model("Cart", cartSchema);
exports.default = cartModel;
