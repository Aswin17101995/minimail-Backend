const express = require("express")
const db = require("./config/mongoose")
const app = express()

const port = 3001
app.use(express.json())
const cors = require("cors")
app.use(cors())


app.use("/",require("./routes/index"))

app.listen(port,function(err){
    if(err)
    {
        console.log("err")
    }
    console.log("server runnning success")
})