"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cartModel_1 = __importDefault(require("../models/cartModel"));
const addItemToCart = async (req, res, next) => {
    console.log("body:", req.body);
    // const item = {
    //   _id: req.body.userName,
    //   productId: req.body.productId,
    //   quantity: 1,
    // };
    // console.log('ITEM:', item);
    // const cartItem = new Cart(item);
    // const data = await cartItem.save();
    // console.log('SAVE TO CART:', data);
    await cartModel_1.default.updateOne({
        userName: req.body.userName,
        productId: req.body.productId,
    }, {
        $inc: { quantity: 1 },
    }, {
        upsert: true,
    });
    res.status(200).json({
        status: "success",
        body: {
            msg: "Item added to cart",
        },
    });
};
const getCartItems = async (req, res, next) => {
    const username = req.query.username;
    console.log("e", username);
    const query = cartModel_1.default.find({ userName: username });
    const results = await query.exec();
    const products = {};
    results.forEach((item) => {
        products[item.productId] = item.quantity;
    });
    res.status(200).json({
        status: "success",
        body: {
            products,
        },
    });
};
const updateItemCount = async (req, res, next) => {
    const productId = req.body.productId;
    const userName = req.body.userName;
    const operation = req.body.operation;
    const mongoOperation = { $inc: { quantity: operation === "INC" ? 1 : -1 } };
    console.log(mongoOperation);
    const response = await cartModel_1.default.findOneAndUpdate({ productId, userName }, mongoOperation);
    console.log("resp", response);
    res.status(200).json({
        status: "success",
        body: {
            response,
        },
    });
};
exports.default = { addItemToCart, getCartItems, updateItemCount };
