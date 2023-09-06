const express = require('express');
require('dotenv').config();
const UserRoute = require('./UserRoute');
const ServerConfigRoute = require('./ServerConfigRoute');
const ResourceConfigRoute = require('./ResourceConfigRoute');
const router = express.Router();

router.use(process.env.usersPATH,UserRoute); //"/users"
router.use(process.env.svcCfg, ServerConfigRoute); //"/ServiceConfig"
router.use(process.env.resCfg,ResourceConfigRoute); //"/ResourceConfig"

module.exports =router;