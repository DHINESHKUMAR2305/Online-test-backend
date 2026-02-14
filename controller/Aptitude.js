
const aptitude = require("../schemamodel/Aptitudemodel")

const Aptitude = async(req , res)=>
{
    const data = await aptitude.find()
    return res.json({
        success : true,
        data : data
    })
}

const aptitudeans = async(req , res)=>
{

    let count = 0;
    
    const useranswers = req.body.answer
    
    const questions = await aptitude.find()
        
    
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

module.exports = {Aptitude , aptitudeans}