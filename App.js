
const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const cors = require("cors")

dotenv.config({ path: path.join(__dirname, "./dotenv/config.env") })
const synonymsrouter = require("./router/Synanymsrouter")
const antonymsrouter = require("./router/Antonymsrouter")
const aptituderouter = require("./router/Aptituderouter")
const codingrouter = require("./router/Codingrouter")
const gamerouter = require("./router/Gamerouter")
const historyrouter = require("./router/Historyrouter")
const gkrouter = require("./router/Gkrouter")
const connectionn = require("./Connectiondatabase")


const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())

connectionn()

app.use(synonymsrouter)
app.use(antonymsrouter)
app.use(aptituderouter)
app.use(codingrouter)
app.use(gamerouter)
app.use(historyrouter)
app.use(gkrouter)



const PORT = process.env.PORT || process.env.PORTNO || 2026;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});