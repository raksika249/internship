const Wishlist = require("../models/Wishlist");

exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;

  let wishlist = await Wishlist.findOne({ user: req.user });

  if (!wishlist) {
    wishlist = await Wishlist.create({
      user: req.user,
      products: [productId]
    });
  } else {
    if (!wishlist.products.includes(productId)) {
      wishlist.products.push(productId);
      await wishlist.save();
    }
  }

  res.json({ message: "Added to wishlist" });
};

exports.getWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user })
    .populate("products");

  res.json(wishlist || { products: [] });
};

exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;

  const wishlist = await Wishlist.findOne({ user: req.user });

  wishlist.products = wishlist.products.filter(
    id => id.toString() !== productId
  );

  await wishlist.save();

  res.json({ message: "Removed from wishlist" });
};
