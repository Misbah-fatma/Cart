const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: {
    type: Number, // Assuming each product has a unique ObjectId
    ref: 'Product', // Reference to the Product model
    required: true
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: Number,
  },
  rating: {
    type: Number,
  }
  // You can add more fields as needed, such as price, color, size, etc.
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema], // Array of cart items
  // Add any other fields you need for your cart document
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;