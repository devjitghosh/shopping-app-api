const express = require("express");
const router = express.Router();
const itemControllers = require('../controllers/itemController');
const cartContorller = require('../controllers/cartContorller');

router.get("/items", itemControllers.getItems);


router.get("/cart-items", cartContorller.getCartItems);
router.post("/addtocart", cartContorller.addItemToCart);
router.put("/update-cart-item", cartContorller.updateItemCount);

module.exports = router;
