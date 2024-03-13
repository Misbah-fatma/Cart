const express = require('express');
const router = express.Router();
const Cart = require('../model/CartModel');
const {
    addItem_controller
  } = require("../controllers/cartController");

// GET route to retrieve the user's cart
router.get("/cart", async (req, res) => {
  try {
    // Retrieve the user's cart from the database
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error getting user cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post(
    "/cart",
    addItem_controller
  );

module.exports = router;
