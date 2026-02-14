
const express = require("express")
const {synonyms, synanymsans} = require("../controller/Synonyms")

const router = express.Router()

router.route("/synonyms").get(synonyms)

router.route("/synonyms/synanymsanswer").post(synanymsans)

module.exports = router