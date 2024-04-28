"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const itemController_1 = __importDefault(require("../controllers/itemController"));
const cartContorller_1 = __importDefault(require("../controllers/cartContorller"));
router.get("/items", itemController_1.default.getItems);
router.get("/cart-items", cartContorller_1.default.getCartItems);
router.post("/addtocart", cartContorller_1.default.addItemToCart);
router.put("/update-cart-item", cartContorller_1.default.updateItemCount);
exports.default = router;
