const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.patch(
  '/updateMyPassword',
  authController.proctect,
  authController.updatePassword
);

router.patch('/updateMe', authController.proctect, userController.updateMe);

router
  .route('/')
  .get(
    authController.proctect,
    authController.restrictTo('admin'),
    userController.getAllusers
  );

module.exports = router;
