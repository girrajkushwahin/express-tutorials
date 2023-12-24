const express = require('express')
const app = express()
const path = require('path')


app.set('view engine', 'ejs')
app.set('views', path.resolve('../views'))


app.use(express.urlencoded({ extended: false }))
app.use(express.static('assets'))


// process.on('uncaughtException', (exception) => {
//     // run when error come in sync code like method calling without defining etc.
//     console.error(exception.message)
//     console.error(exception);
//     // it is terminating the process automatically. why?
// })

// process.on('unhandledRejection', exception => {
//     // run when promise rejection is not handled.
//     console.error(exception.message)
//     console.error(exception);
//     // it is not terminating the process automatically. why?
// })


const names = ['Girraj', 'Kushwah', 'abcd', 'xyz']
const colors = ['red', 'blue']
const plNames = ['C', 'C++', 'JS', 'Python']
const userData = []

app.get('/', (req, res) => {
    // console.log('incoming request');
    res.status(200).render('home', {
        page: 'homepage',
        names, colors, plNames
    })
})

app.get('/contact', (req, res) => {
    userData.length = 0
    res.status(200).render('contact', {
        page: 'contact'
    })
})
app.post('/contact', (req, res) => {
    const { myname, profession, age } = req.body
    userData.push(myname, profession, age)
    res.redirect('/user')
})

app.get('/user', (req, res) => {
    res.status(200).render('user', {
        page: 'user',
        userData
    })
})


app.listen(8000, () => {
    console.log('server running on port 8000...');
})
