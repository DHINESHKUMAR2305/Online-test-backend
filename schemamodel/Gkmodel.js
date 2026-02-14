



const mongoose = require("mongoose")

const gkschema = mongoose.Schema({
    question: 
    {
        type: String,
        required: true
    },
    option1: 
    {
        type: String,
        required: true
    },
    option2: 
    {
        type: String,
        required: true
    },
    option3: 
    {
        type: String,
        required: true
    },
    option4: 
    {
        type: String,
        required: true
    },
    answer: 
    {
        type: String,
        required: true
    }
})

const gkmodel = mongoose.model("gk" , gkschema , "gk")

module.exports = gkmodel