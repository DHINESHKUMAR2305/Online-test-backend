
const antonyms  = require("../schemamodel/Antonymsmodel")


const Antonyms = async(req , res)=>
{
    const data = await antonyms.find()

    return res.json({
        success : true , 
        data : data
    })
}


const Antonymsans = async(req , res)=>
{
    let count = 0;

    const useranswers = req.body.answer

    const questions = await antonyms.find()
    

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
module.exports = {Antonyms , Antonymsans}