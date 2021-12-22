const mongoose = require("mongoose")



let EmailSchema = new mongoose.Schema(
    {
       loginperson:"String",
       sender:"String",
       date:"String",
       content:"String",
       subject:"String"

    }
)

let Emaildata = mongoose.model('Emaildata',EmailSchema)

module.exports = Emaildata
