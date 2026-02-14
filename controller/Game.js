
const game  = require("../schemamodel/Gamemodel")

const Game = async(req , res)=>
{
    const data = await game.find()
    return res.json({
        success : true,
        data : data
    })
}

const gameans = async(req , res)=>
{
    let count = 0;
    
    const useranswers = req.body.answer
    
    const questions = await game.find()
        
    
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

module.exports = {Game , gameans}
