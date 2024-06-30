import express from "express";
const router = express.Router();
import itemControllers from "../controllers/itemController";
import cartContorller from "../controllers/cartContorller";
import {
  getProductReviewById,
  addProductReview,
} from "../controllers/reviewController";

router.get("/items", itemControllers.getItems);
router.get("/item/reviews/:id", getProductReviewById);
router.post("/item/review", addProductReview);

router.get("/cart-items", cartContorller.getCartItems);
router.post("/addtocart", cartContorller.addItemToCart);
router.put("/update-cart-item", cartContorller.updateItemCount);
router.delete("/delete-cart-item", cartContorller.deleteCartItem);

export default router;
