
const express = require("express")
const {History, historyans} = require("../controller/History")

const router = express.Router()

router.route("/culture").get(History)
router.route("/culture/ans").post(historyans)

module.exports = router