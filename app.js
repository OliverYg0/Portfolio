const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'icons', 'favicon.ico')))

app.use((req, res, next) => {
    res.locals.title = 'Oliver Zygo'
    next()
})

app.get('/', (req, res) => {
    res.render('index', { page: 'Home'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {page: 'Contact'})
})

app.listen(port, () => {
    console.log('App is listening on port', port)
})