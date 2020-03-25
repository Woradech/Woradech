var express = require('express');
var router = express.Router();


let bisectionmodel = require('../models/bisectionmodel');
let falsemodel= require('../models/falsemodel');
let newtonmodel= require('../models/newtonmodel');
let onepointmodel= require('../models/onepointmodel');
let secantmodel= require('../models/secantmodel');
let trapezoidalmodel = require('../models/trapezoidalmodel');
let comtrapezoidalmodel= require('../models/comtrapezoidalmodel');
let simpsonmodel= require('../models/simpsonmodel');
let comsimpsonmodel= require('../models/comsimpsonmodel');
let forwardmodel= require('../models/forwardmodel');
let backwardmodel= require('../models/backwardmodel');
let centralmodel= require('../models/centralmodel');



/* GET users listing. */


/////////////////////////////////////////////////////////////

router.get('/showbisectionmodel', function(req, res, next) {
 
  bisectionmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/bisectionmodel',(req,res)=>{
  console.log(req.body);
  let doc = new bisectionmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showfalsemodel', function(req, res, next) {
 
  falsemodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/falsemodel',(req,res)=>{
  console.log(req.body);
  let doc = new falsemodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/shownewtonmodel', function(req, res, next) {
 
  newtonmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/newtonmodel',(req,res)=>{
  console.log(req.body);
  let doc = new newtonmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showonepointmodel', function(req, res, next) {
 
  onepointmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/onepointmodel',(req,res)=>{
  console.log(req.body);
  let doc = new onepointmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showsecantmodel', function(req, res, next) {
 
  secantmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/secantmodel',(req,res)=>{
  console.log(req.body);
  let doc = new secantmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showtrapezoidalmodel', function(req, res, next) {
 
  trapezoidalmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/trapezoidalmodel',(req,res)=>{
  console.log(req.body);
  let doc = new trapezoidalmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showcomtrapezoidalmodel', function(req, res, next) {
 
  comtrapezoidalmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/comtrapezoidalmodel',(req,res)=>{
  console.log(req.body);
  let doc = new comtrapezoidalmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showsimpsonmodel', function(req, res, next) {
 
  simpsonmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/simpsonmodel',(req,res)=>{
  console.log(req.body);
  let doc = new simpsonmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showcomsimpsonmodel', function(req, res, next) {
 
  comsimpsonmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/comsimpsonmodel',(req,res)=>{
  console.log(req.body);
  let doc = new comsimpsonmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showforwardmodel', function(req, res, next) {
 
  forwardmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/forwardmodel',(req,res)=>{
  console.log(req.body);
  let doc = new forwardmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showbackwardmodel', function(req, res, next) {
 
  backwardmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/backwardmodel',(req,res)=>{
  console.log(req.body);
  let doc = new backwardmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////////////////

router.get('/showcentralmodel', function(req, res, next) {
 
  centralmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});

router.post('/centralmodel',(req,res)=>{
  console.log(req.body);
  let doc = new centralmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
module.exports = router;
