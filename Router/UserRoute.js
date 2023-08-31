const express = require('express');
const UserRoute = express.Router();
const{
    getUsers,
    getUsersByid,
    createUsers,
    deleteUser,
}= require('../Controller/UserController')

UserRoute.get('/',getUsers);
UserRoute.get('/:id',getUsersByid);
UserRoute.post('/',createUsers);
UserRoute.delete('/:id',deleteUser);

module.exports =UserRoute;