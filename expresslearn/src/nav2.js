// routing and send html and json data in response -
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to homepage');
})
app.get('/about', (req, res) => {
    // res.writeHead(404,{"content-type":"text/plain"})
    res.write('hello');
    res.write('i am girraj');
    res.send(); // for closing the connection like res.end()
})
app.get('/aboutme', (req, res) => {
    res.status(200).send('<h1>welcome to error page<h1>'); // can send html res if code is 1 line
})
app.get('/temp', (req, res) => {      // if temp do work related to api then this trick(method) can help
    // 1st method -

    // res.send({
    //     id:1,
    //     name:'Girraj'
    // });

    // res.send([{
    //     id:1,
    //     name:'Girraj'
    // },
    // {
    //     id:2,
    //     name:'Dhananjay'
    // },
    // {
    //     id:3,
    //     name:'Rajkumar'
    // }]);
    // behind the scene experss will stringify the object/array

    // 2nd method -

    res.json([{
        id: 1,
        name: 'Girraj'
    },
    {
        id: 2,
        name: 'Dhananjay'
    },
    {
        id: 3,
        name: 'Rajkumar'
    }]);
})

app.listen(8000, () => {
    console.log('listening to port 8000');
})