// const path=require('path');
// const express = require('express');
// const app=express();
// port=8000;

// const staticPath=path.join(__dirname,'../public -index4');
// const templatePath=path.join(__dirname,'../templates')
// app.use(express.static(staticPath))

// // to set the view engine
// app.set('view engine','hbs');
// app.set('views',templatePath); // views renamed to templates for using partials inside templates

// // template engine route
// app.get('/',(req,res)=>{
//     res.render('index',{
//         dynamicContent:"dynamic data"
//     });
// })
// app.get('/about',(req,res)=>{
//     res.render('about');
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(`${staticPath}/contact.html`);
// })

// app.listen(port,()=>{
//     console.log('listening to port 8000');
// })




const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
port = 8000;

const staticPath = path.join(__dirname, '../public -index4');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// to set the view engine
app.set('view engine', 'hbs');
// views renamed to templates
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// template engine route
app.get('/', (req, res) => {
    res.render('index', {
        dynamicContent: "dyndata"
    });
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.sendFile(`${staticPath}/contact.html`);
})

app.listen(port, () => {
    console.log('listening to port 8000');
})