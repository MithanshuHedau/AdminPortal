const express = require('express');
const { jwtAuthMiddleware } = require('../jwt');
const router = express.Router();

// Protected route example
router.get('/profile', jwtAuthMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Profile accessed successfully',
    user: req.user
  });
});

// Protected dashboard data
router.get('/dashboard-data', jwtAuthMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Dashboard data retrieved successfully',
    data: {
      welcomeMessage: `Welcome back, ${req.user.username}!`,
      lastLogin: new Date().toISOString(),
      userStats: {
        loginCount: 1,
        accountCreated: new Date().toISOString()
      }
    }
  });
});

module.exports = router;
