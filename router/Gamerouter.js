
const express = require("express")
const {Game, gameans} = require("../controller/game")

const router = express.Router()

router.route("/games").get(Game)
router.route("/games/ans").post(gameans)

module.exports = router