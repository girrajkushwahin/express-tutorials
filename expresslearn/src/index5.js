const http = require('http')
const app = require('express')()
// const { urlencoded } = require('express')
// const router = require('express').Router()


// app.use(urlencoded({ extended: true }))
// app.use(router)


app.get('/data', (req, res) => {
    console.log('req coming');
})


// app.route('/data')
//     .get((req, res) => console.log('get request'))
//     .post(() => console.log('post request'))
//     .patch(() => console.log('patch request'))
//     .delete(() => console.log('delete request'))


// router.route('/info')
//     .get((req, res) => console.log('get request'))
//     .post(() => console.log('post request'))
//     .put(() => console.log('put request'))
//     .delete(() => console.log('delete request'))


const server = http.createServer(app)
server.listen(8000, () => {
    console.log('server running on port 8000');
})
