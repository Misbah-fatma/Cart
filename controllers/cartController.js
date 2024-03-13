// controllers/cartController.js

const Cart = require('../model/CartModel');

module.exports.addItem_controller = async (req, res, next) => {
  try {
    const { price, description } = req.body;
    // console.log(req.body)
    // console.log(req.file);
    // console.log(!courseDescription || !courseName);
    // console.log(!req.file)
    if (!price || !description || !req.file) {
      return res.status(400).json({
        error: "Please Provide All Information",
      });
    }

    const item = new CartModel({
     price,
     description,
     image : req.file.path,
     rating
    });
    item
      .save()
      .then((result) => {
        console.log(result)
        return res.status(200).json({
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          error: "Something went wrong1",
        });
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "Something went wrong2",
    });
  }
};

// Controller function to get user's cart
const getUserCart = async (req, res) => {
  try {
    // Fetch the user's cart items from the database
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error getting user cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other controller functions for cart management (e.g., removing items from cart) could be added here


