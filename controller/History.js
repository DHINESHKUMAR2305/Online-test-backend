
const history = require("../schemamodel/Historymodel")

const History = async(req , res)=>
{
    const data = await history.find()
    return res.json({
        success : true,
        data : data
    })
}

const historyans = async(req , res)=>
{

    let count = 0;
        
    const useranswers = req.body.answer
        
    const questions = await history.find()
            
        
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

module.exports = {History , historyans}