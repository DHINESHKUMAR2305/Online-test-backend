
const synanyms = require("../schemamodel/Synanymsmodel")

const synonyms = async(req , res )=>
{
    const data = await synanyms.find()

    return res.json({
        success : true,
        data : data
    })
}

const synanymsans = async(req , res)=>
{
    let count = 0;

    const useranswers = req.body.answer

    const questions = await synanyms.find()
    

    questions.forEach((xx)=>
    {
        if (useranswers[xx._id] === xx.answer)
        {
            count++
        }
    })
    
    return res.json({
        success : true ,
        score : count
    })
}

module.exports = {synonyms , synanymsans}


