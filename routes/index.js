var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */

router.get("/", function(req,res){
  fs.readdir("./openstate", function(err, data){
    if(err) throw err
    res.render("index", {filename: data, fileNames: "", filedata: "",})
  })
});


router.get("/text", function(req,res){
  fs.writeFile(`./openstate/${req.query.fname}`, "", function(err){
    if(err){
      res.send(err)
    }
    else{
      res.redirect("/")
    }
  });


})

router.get("/foldertext", function(req, res){
  fs.mkdir(`./openstate/${req.query.folderName}`, function(err){
    if(err){
      res.send(err)
    }
    else{
      res.redirect("/")
    }
  })
})


router.get("/delete/:user", function(req, res){
  fs.unlink(`./openstate/${req.params.user}`, function(err){
    if(err){
      res.send(err)
    }
      
    else{
      res.redirect("/")
    }
  })
})

router.get("/delete", function(req, res){
  fs.rmdir(`./openstate/${req.query.folderName}`, function(err){
    if(err) {
      res.send(err)
    }
    else{
      res.redirect("/")
    }
  })
})

router.get("/Fileshare/:files", function(req, res){
  fs.readFile(`./openstate/${req.params.files}`, "utf-8", function(err, filedata){
    fs.readdir("./openstate", function(err, filename){
      res.render("index", {filename, fileNames: req.params.files, filedata })
    } )
  })
})





module.exports = router;