const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const wishlistController = require("../controllers/wishlistController");

router.post("/", auth, wishlistController.addToWishlist);
router.get("/", auth, wishlistController.getWishlist);
router.delete("/:productId", auth, wishlistController.removeFromWishlist);

module.exports = router;
