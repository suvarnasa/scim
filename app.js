require('dotenv').config();
const router = require('./Router/router');
const express = require('express');


const app = express();

//middlewares 

app.use(express.json({ type: 'application/*+json' }));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/v2/', router);

const port = process.env.PORT || 2000 ; 
const appstart = ()=>{
    console.log('server starting ...');
    app.listen(port,()=>{
        console.log(`server started on ${port}`)
    })
}
appstart();