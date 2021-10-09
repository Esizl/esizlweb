const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
  console.log('\x1b[34m', `[${req.path}] has been visited`)
})

router.get('/discord', (req, res) => {
  res.send('Discord')
  var dn = new Date()
  console.log('\x1b[34m', `[${req.path}] has been visited`)
})

const Url = require('../models/Url')

router.get('/u/:code', async (req, res) => {
  if (!req.params.code) return
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).render('404')
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
  console.log('\x1b[34m', `[${req.path}] has been visited`)
})

module.exports = router