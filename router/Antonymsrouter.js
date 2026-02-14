
const express = require("express")

const {Antonyms, Antonymsans} = require("../controller/Antonyms")


const router = express.Router()

router.route("/antonyms").get(Antonyms)

router.route("/antonyms/antonymsans").post(Antonymsans)

module.exports = router