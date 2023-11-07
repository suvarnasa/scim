require('dotenv').config();
let {groups, groupmeta, groupNotFound} = require('../data');

let index = 5;

let loc = process.env.SERVERURL+':'+
process.env.PORT+
process.env.APIURL+
process.env.groupPATH;


const getGroup = (req,res)=>{

    const { filter, index, count } = req.query;
    if (filter) {
        let group={};
        const fil = filter.split(' ');
        console.log(fil);
        if (fil[1] === 'eq') {
            group = groups.find((g)=> {
                 if (`"${g.displayName}"` === fil[2]) {
                    return g;
                }
            })   
        }
        if (group){
            res.status(200).json(user);
        }
        else{
            res.setHeader('content-type', 'text/html');
            res.status(401).json(groupNotFound);      
        }
    }
    else{
        res.status(200).json(groups);
    }
}
const createGroup = (req,res)=>{
    const id = index;
    const group = req.body;
    group.id = String(Number(id)+1);
    groups.push(group);
    const m = groupmeta;
    m.location= loc+`/${group.id}`;
    group.meta = m;
    index++;
    res.location(m.location).status(201).json(group);
}

const getGroupByid = (req,res) => {
    const { id } = req.params;
    const group = groups[Number(id)-1];
    res.location(loc+`/${id}`).status(200).json(group);
}

const deleteGroup = (req,res) => {
    const { id } = req.params;
    var cnt = 0; 
    var group = groups.find((g)=> {
    if (g.id === id) {
        console.log(g.displayName);
        groups.splice(cnt, 1);
        console.log("found group");
        return g;
    }
    cnt++;
    })
    if (group) {
        res.status(200).json(null);
    }
    else{
        res.setHeader('content-type', 'text/plain');
        res.status(404).json(groupNotFound);
    }
}

module.exports={
    createGroup,
    getGroup,
    getGroupByid,
    deleteGroup
}

