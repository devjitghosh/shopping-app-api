"use strict";
const Cart = require("../models/cartModel");
exports.addItemToCart = async (req, res, next) => {
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
    await Cart.updateOne({
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
exports.getCartItems = async (req, res, next) => {
    const username = req.query.username;
    console.log("e", username);
    const query = Cart.find({ userName: username });
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
exports.updateItemCount = async (req, res, next) => {
    const productId = req.body.productId;
    const userName = req.body.userName;
    const operation = req.body.operation;
    const mongoOperation = { $inc: { quantity: operation === "INC" ? 1 : -1 } };
    console.log(mongoOperation);
    const response = await Cart.findOneAndUpdate({ productId, userName }, mongoOperation);
    console.log("resp", response);
    res.status(200).json({
        status: "success",
        body: {
            response,
        },
    });
};
