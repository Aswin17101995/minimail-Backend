const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/app')
const db = mongoose.connection
db.on("error",console.error.bind("err"))
db.once("open",function(){
    console.log("db connect succcess")
})

module.exports = mongoose