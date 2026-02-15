const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const cartController = require("../controllers/cartController");

router.post("/", auth, cartController.addToCart);
router.get("/", auth, cartController.getCart);
router.delete("/:productId", auth, cartController.removeFromCart);

module.exports = router;
