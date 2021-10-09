const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/index.js'))
app.use('/auth', require('./routes/auth.js'))

app.use(function (req, res, next){
	res.status(404).render('404')
})

const port = process.env.PORT || require('esizluuid')(4, '123456789')
try {
  app.listen(port)
  console.clear()
  console.log(`Server: online\nPort: ${port}\nError: N/A`)
} catch (error) {
  console.clear()
  console.error(`Server: offline\nPort: N/A\nError: ${error}`)
}