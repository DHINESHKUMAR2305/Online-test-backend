
const express = require("express")
const { cod, codans } = require("../controller/Coding")

const router = express.Router()

router.route("/coding").get(cod)

router.route("/coding/ans").post(codans)

module.exports = router