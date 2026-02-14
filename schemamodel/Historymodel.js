



const mongoose = require("mongoose")

const historyschema = mongoose.Schema({
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

const historymodel = mongoose.model("history" , historyschema , "history")

module.exports = historymodel