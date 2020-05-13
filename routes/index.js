var express = require('express');
var router = express.Router();
const contactmodel = require('./../models/contactus');

// // include CSRF
// const csrf = require('csurf');
// var csrfprotection = csrf();  
// router.use(csrfprotection);

/* GET home page. */

//  routes
router.get('/', function (req, res) {
  res.render('index');
});
router.get('/services', function (req, res) {
  
  res.render('services');
});


// contact page
router.get('/contact', function (req, res) {
  res.render('contact');
})
router.post('/contact', async function (req, res) {
  let cont = new contactmodel({
      name:req.body.username,
      email: req.body.email,
      msg: req.body.msg
  })
  try {
      console.log(cont);
      cont = await cont.save();

      res.redirect('/');
  } catch (error) {
      console.log(error);
      res.redirect('/contact');
  }
})
router.get('/contact/:id', async function (req, res) {
  const cont = await contactmodel.findById(req.params.id);
  res.render('contactshow',{ cont:cont });
});

router.get('/saqibadmin', async function (req, res) {
  const cont = await contactmodel.find().sort({createdAt:'desc'});
  res.render('admin',{cont:cont});
});


//404 page
router.get('*', function (req, res) {
  res.send('page not found');
})


module.exports = router;
