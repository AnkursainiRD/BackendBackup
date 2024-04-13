var express = require('express');
var router = express.Router();
const {dbConnection}=require("../Database/db.js")
const userModel=require("../models/users.js")
const passport=require("passport")
const localStrategy=require("passport-local")

dbConnection();

passport.use(new localStrategy(userModel.authenticate()))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index")
});

router.get("/register",function(req,res){
  res.render("register")
})
router.get("/login",function(req,res){
  res.render("login")
})
router.get("/profile",isLoggedIn,function(req,res){
  res.render("profile")
})

// router.post("/register",function(req,res){
//     var userData=new userModel({
//       username:req.body.fullname,
//       email:req.body.email,
//       password:req.body.password
//     })

//     userModel.register(userData, req.body.password)
//     .then(function(registereduser){
//       passport.authenticate("local")(req,res,function(){
//         res.redirect("/")
//       })
//     })
// })


// router.post("/login",passport.authenticate("local",{
//   successRedirect:"/",
//   failureRedirect:"/login"
// }),function(req,res){})

// function isLoggedIn(req,res,next){
//   if(req.isAuthenticated()){
//     return next();
//   }
//   res.redirect("/login")
// }

router.post("/register",function(req,res){
  var userData=new userModel({
    username:req.body.fullname,
    password:req.body.password,
    email:req.body.email,
  });

  userModel.register(userData, req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/")
    })
  })
})


// Login Method

router.post("/login",passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/login"
}),function(req,res){});

// Logout Method

router.get("/logout",function(req,res){
  req.logout(function(err){
    if(err){
      return next(err);
    }
    res.redirect("/")
  })
})


// Check authoraization

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login")
}


module.exports = router;
