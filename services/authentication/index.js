const express = require('express');

const router = express.Router();

const login = require('./findUserByUsernamePassword');

router.post('/', login);

module.exports = router;
