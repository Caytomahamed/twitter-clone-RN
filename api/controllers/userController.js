const userModel = require('../models/model/userModel');
const factory = require('../controllers/handlerFactory');

exports.getAllusers = factory.getAll(userModel);
