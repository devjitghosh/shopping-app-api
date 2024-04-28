import express from "express";
const router = express.Router();
import itemControllers from '../controllers/itemController';
import cartContorller from '../controllers/cartContorller';

router.get("/items", itemControllers.getItems);


router.get("/cart-items", cartContorller.getCartItems);
router.post("/addtocart", cartContorller.addItemToCart);
router.put("/update-cart-item", cartContorller.updateItemCount);

export default router;
