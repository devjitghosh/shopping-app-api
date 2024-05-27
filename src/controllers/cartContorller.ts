import { RequestHandler } from "express";
import Cart from "../models/cartModel";

const addItemToCart: RequestHandler = async (req, res, next) => {
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
  await Cart.updateOne(
    {
      userName: req.body.userName,
      productId: req.body.productId,
    },
    {
      $inc: { quantity: 1 },
    },
    {
      upsert: true,
    }
  );

  res.status(200).json({
    status: "success",
    body: {
      msg: "Item added to cart",
    },
  });
};

const getCartItems: RequestHandler = async (req, res, next) => {
  const username = req.query.username;
  console.log("e", username);
  const query = Cart.find({ userName: username });
  const results = await query.exec();
  const products: { [key: number]: number } = {};
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

const updateItemCount: RequestHandler = async (req, res, next) => {
  const productId = req.body.productId;
  const userName = req.body.userName;
  const operation = req.body.operation;
  const mongoOperation = { $inc: { quantity: operation === "INC" ? 1 : -1 } };
  console.log(mongoOperation);
  const response = await Cart.findOneAndUpdate(
    { productId, userName },
    mongoOperation
  );
  console.log("resp", response);
  res.status(200).json({
    status: "success",
    body: {
      response,
    },
  });
};

const deleteCartItem: RequestHandler = async (req, res, next) => {
  const { productId, userName } = req.query;
  if (!productId || !userName) {
    res.status(400).json({
      status: "failure",
      body: {
        message: "Must provide productId and userName in queryString",
      },
    });
  }
  try {
    const deleteResponse = await Cart.deleteOne({ userName, productId });
    console.log("DR", deleteResponse);
    res.status(200).json({
      status: "success",
      body: {
        message: "deletion successful",
      },
    });
  } catch (err) {
    console.error("err", err);
  }
};

export default { addItemToCart, getCartItems, updateItemCount, deleteCartItem };
