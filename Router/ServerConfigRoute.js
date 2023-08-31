const express = require('express');
const ServerConfigRoute = express.Router();
const {getServiceProvider}= require('../Controller/ServerConfigController')

ServerConfigRoute.get('/', getServiceProvider);
module.exports =ServerConfigRoute;