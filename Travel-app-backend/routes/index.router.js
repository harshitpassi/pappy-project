const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlPackage = require('../controllers/package.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/package', ctrlPackage.package);
router.post('/createPackage', ctrlPackage.createPackage);
router.post('/managePackage', ctrlPackage.package);

module.exports = router;



