


const mongoose = require("mongoose")

const aptitudeschema = mongoose.Schema({
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

const aptitudemodel = mongoose.model("apti" , aptitudeschema , "apti")

module.exports = aptitudemodel