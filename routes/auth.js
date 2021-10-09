const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
  console.log('\x1b[34m', `[${req.path}] has been visited`)
})

router.get('/login', (req, res) => {
  res.render('user/login')
  console.log('\x1b[34m', `[${req.path}] has been visited`)
})

router.post('/login', (req, res) => {
  console.log(req.body)
  console.log('\x1b[34m', `[${req.path}] has been posted`)
})

module.exports = router