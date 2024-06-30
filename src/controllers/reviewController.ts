import { RequestHandler } from "express";
import ProductReview, { Review } from "../models/ProductReviewModel";
import ShoppingError from "../customclasses/shoppingError";

export const getProductReviewById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await ProductReview.findById(id);
    if (!data) {
      const notFoundError = new ShoppingError(
        "Product Review not Found!!!",
        404
      );
      return next(notFoundError);
    }
    res.status(200).json({
      status: "success",
      reviews: data?.reviews,
    });
  } catch (error) {
    console.log("error");
    next(error);
  }
};

export const addProductReview: RequestHandler = async (req, res, next) => {
  const { productId, review } = req.body;
  review._id = 10;
  try {
    const data = await ProductReview.findById(productId);
    if (!data) {
      const notFoundError = new ShoppingError(
        "Product Review not Found!!!",
        404
      );
      return next(notFoundError);
    }
    data.reviews.push(new Review(review));
    let rsp = await data.save();
    console.log("rsp", rsp);
    res.status(200).json({
      status: "success",
      reviews: data?.reviews,
    });
  } catch (error) {
    console.log("error");
    next(error);
  }
};
