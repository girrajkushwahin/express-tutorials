const path=require('path');
const express = require('express');
const app=express();

const staticPath=path.join(__dirname,'../public');
// console.log(staticPath)

app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    // res.send('hello from express server');

    res.sendFile(`${staticPath}/index.html`) // by the way, no need to write this line. this file is shown automaticaly on homepage becasue we used express.static middleware for serving files(html,css,js) and index.html will be served as homepage automatically.
})
app.get('/about',(req,res)=>{
    // res.send('hello from about page');
    res.sendFile(`${staticPath}/about.html`)
})

app.listen(8000,()=>{
    console.log('listening to port 8000');
})