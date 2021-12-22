const data1 = require("../models/usermodel")
const emaildata = require('../models/emailmodel')

module.exports.home = function(req,res){
    console.log("req came in")
    console.log(req.body)
   data1.create({name:req.body.name,
                email:req.body.email,
                dob:req.body.dob,
                password:req.body.password
                })
    return res.send("true")
}

module.exports.hello =function(req,res){
    return res.send("<h1>hello</h1>")
}

module.exports.signin = function(req,res){
    console.log(req.body)
    let e = req.body.email
    let p = req.body.password
   var val =data1.findOne({email:e},function(err,d)
   {
       if(err)
       {
           console.log("err")
           return res.send("false")
       }
       if(d==null)
       {
           return res.send("false")
       }
       if(d!=null)
       {
           if(!(d.password.localeCompare(p)))
           {
               return res.send("true")
           }
           else
           {
               return res.send("false")
           }
       }
      
   })
  
}


module.exports.email= function(req,res)
{
   console.log(req.body)
   emaildata.create({
       loginperson:req.body.email,
       sender:req.body.sender,
       subject:req.body.subject,
       content:req.body.content,
       date:req.body.date
   })
   return res.send("true")
}


module.exports.inbox= function(req,res){
    console.log(req.body)
    emaildata.find({loginperson:req.body.person},function(err,dl){
        if(err)
        {
            console.log(err)
        }
        console.log(dl)
        return res.json(dl)
        
    })
}