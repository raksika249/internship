const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const cartController = require("../controllers/cartController");

router.post("/", auth, cartController.addToCart);
router.get("/", auth, cartController.getCart);
router.put("/", auth, cartController.updateCart);
router.delete("/:productId", auth, cartController.removeFromCart);

module.exports = router;
