
const express = require("express")
const { Game, gameans } = require("../controller/Game")

const router = express.Router()

router.route("/games").get(Game)
router.route("/games/ans").post(gameans)

module.exports = router