// backend/controllers/paymentController.js
const asyncHandler = require('express-async-handler');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/orderModel');

// @desc    Create Stripe payment intent
// @route   POST /api/payment/intent
// @access  Private
const createPaymentIntent = asyncHandler(async (req, res) => {
  const { amount, orderId } = req.body;

  // Verify order exists and belongs to user
  const order = await Order.findById(orderId);
  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  if (order.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  // Create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    metadata: {
      orderId: orderId,
    },
  });

  res.send(paymentIntent.client_secret);
});

module.exports = { createPaymentIntent };
