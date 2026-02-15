const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product)
    return res.status(404).json({ message: "Product not found" });

  let cart = await Cart.findOne({ user: req.user });

  if (!cart) {
    cart = await Cart.create({
      user: req.user,
      items: [{ product: productId, quantity }]
    });
  } else {
    const itemIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
  }

  res.json({ message: "Product added to cart" });
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user })
    .populate("items.product");

  if (!cart)
    return res.json({ items: [], total: 0 });

  let total = 0;

  cart.items.forEach(item => {
    total += item.product.price * item.quantity;
  });

  res.json({
    items: cart.items,
    total
  });
};

exports.updateCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cart = await Cart.findOne({ user: req.user });

  const item = cart.items.find(
    item => item.product.toString() === productId
  );

  if (!item)
    return res.status(404).json({ message: "Item not found" });

  item.quantity = quantity;
  await cart.save();

  res.json({ message: "Cart updated" });
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;

  const cart = await Cart.findOne({ user: req.user });

  cart.items = cart.items.filter(
    item => item.product.toString() !== productId
  );

  await cart.save();

  res.json({ message: "Item removed from cart" });
};
