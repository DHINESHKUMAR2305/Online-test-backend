
const express = require("express")
const {Aptitude, aptitudeans} = require("../controller/Aptitude")

const router = express.Router()

router.route("/aptitude").get(Aptitude)
router.route("/aptitude/ans").post(aptitudeans)

module.exports = router