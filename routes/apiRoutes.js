const express = require("express");
const path = require("path");
const db = require('../models');
const SHA256 = require('crypto-js/sha256');
const crypto = require('crypto-js')
const router = express.Router();

router.post("/register", function(req, res) {
    
});