
const coding = require("../schemamodel/Codingmodel")

const cod = async(req , res )=>
{
    const data = await coding.find()

    return res.json({
        success : true,
        data : data
    })
}

const codans = async(req , res)=>
{

    let count = 0;
    
    const useranswers = req.body.answer
    
    const questions = await coding.find()
        
    
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



module.exports = {cod , codans}


