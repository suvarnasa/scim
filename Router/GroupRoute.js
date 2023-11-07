const express = require('express');
const GroupRoute = express.Router();
const{
    getGroup,
    getGroupByid,
    createGroup,
    deleteGroup,
}= require('../Controller/groupController');

GroupRoute.get('/',getGroup);
GroupRoute.get('/:id',getGroupByid);
GroupRoute.post('/',createGroup);
GroupRoute.delete('/:id',deleteGroup);

module.exports = GroupRoute;