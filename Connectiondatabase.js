
const mongoose = require("mongoose")

const connectionn = ()=>
{
    mongoose.connect(process.env.DATA_BASE_LINK).then((con)=>
    {
        console.log(con.connection.host);
    })
}

module.exports = connectionn