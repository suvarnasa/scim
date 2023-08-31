require('dotenv').config();
let {users, meta, userNotFound} = require('../data');

let index = 5;
let pathURL='/users';

let loc = process.env.SERVERURL+':'+
process.env.PORT+
process.env.APIURL+
pathURL;


const getUsers = (req, res) => {
    const { filter, index, count } = req.query;
    if (filter) {
        const fil = filter.split(' ');
        console.log(fil);
        if (fil[1] === 'eq') {
            const user = users.find((u)=> {
                if (`"${u.userName}"` === fil[2]) {
                    return res.status(200).json(u);
                }
                else{
                    res.setHeader('content-type', 'text/plain');
                    return res.status(401).send(userNotFound);
                }
                
            })
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
    users.push(user);
    const m = meta;
    m.location= loc+`/${user.id}`;
    user.meta = m;
    index++;
    res.location(m.location).status(201).json(user);
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    var cnt = 0;
    //take a relook at this whole fn later. find functions should not delete user only find it. 
    const user = users.find((u)=> {
        console.log(u.userName);
    if (u.id === id) {
        users.splice(cnt, 1);
        console.log("found user");
        return res.status(200).json([]);
    }
    cnt++;
    })
    if (!user) {
     return res.status(404);
    }   
}

module.exports ={
    getUsers,
    getUsersByid,
    createUsers,
    deleteUser,
}