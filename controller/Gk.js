
const gk = require("../schemamodel/Gkmodel")

const Gk = async(req , res)=>
{
    const data = await gk.find()
    return res.json({
        success : true,
        data : data
    })
}

const gkans = async(req , res)=>
{
    let count = 0;
        
        const useranswers = req.body.answer
        
        const questions = await gk.find()
            
        
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

module.exports = {Gk , gkans}