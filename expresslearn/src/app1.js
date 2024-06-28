const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello from express server');
})
app.get('/about', (req, res) => {
    res.send('hello from about page');
})

app.listen(8000, () => {
    console.log('listening to port 8000');
})