import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  starRating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
});

const productReviewSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
    unique: true,
  },
  reviews: [reviewSchema],
});

export const Review = mongoose.model("Review", reviewSchema);
const ProductReview = mongoose.model("ProductReview", productReviewSchema);

export default ProductReview;
