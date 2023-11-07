require('dotenv').config();
let {users, usermeta, userNotFound} = require('../data');

let index = 6;

let loc = process.env.SERVERURL+':'+
process.env.PORT+
process.env.APIURL+
process.env.usersPATH;


const getUsers = (req, res) => {
    const { filter, index, count } = req.query;
    if (filter) {
        let user={};
        const fil = filter.split(' ');
        console.log(fil);
        if (fil[1] === 'eq') {
            user = users.find((u)=> {
                 if (`"${u.userName}"` === fil[2]) {
                    return u;
                }
            })   
        }
        if (user){
            res.status(200).json(user);
        }
        else{
            res.setHeader('content-type', 'text/html');
            res.status(401).json(userNotFound);      
        }
    }
    else{
        res.status(200).json(users);
    }
}

const getUsersByid = (req,res)=>{
    const { id } = req.params;
    const user = users[Number(id)-1];
    res.location(loc+`/${id}`).status(200).json(user);
}

const createUsers = (req,res)=>{
//    console.log(req.body);
    const id = index;
    const user = req.body;
    user.id = String(Number(id)+1);
    delete user.password;
    users.push(user);
    const m = usermeta;
    m.location= loc+`/${user.id}`;
    user.meta = m;
    index++;
    res.location(m.location).status(201).json(user);
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    var cnt = 0; 
    var user = users.find((u)=> {
    if (u.id === id) {
        console.log(u.userName);
        users.splice(cnt, 1);
        console.log("found user");
        return u;
    }
    cnt++;
    })
    if (user) {
        res.status(200).json(null);
    }
    else{
        res.setHeader('content-type', 'text/plain');
        res.status(404).json(userNotFound);
    }           
}

module.exports ={
    getUsers,
    getUsersByid,
    createUsers,
    deleteUser,
}