const express = require('express');
const ResourceConfigRoute = express.Router();
const {getResourceTypes}= require('../Controller/ServerConfigController')

ResourceConfigRoute.get('/', getResourceTypes);
module.exports =ResourceConfigRoute;