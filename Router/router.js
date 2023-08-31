const express = require('express');
const UserRoute = require('./UserRoute');
const ServerConfigRoute = require('./ServerConfigRoute');
const ResourceConfigRoute = require('./ResourceConfigRoute');
const router = express.Router();

router.use('/users',UserRoute);
router.use('/ServiceConfig', ServerConfigRoute);
router.use('/ResourceConfig',ResourceConfigRoute);

module.exports =router;