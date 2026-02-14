
const express = require("express")
const {Gk, gkans} = require("../controller/Gk")

const router = express.Router()

router.route("/gk").get(Gk)

router.route("/gk/ans").post(gkans)

module.exports = router