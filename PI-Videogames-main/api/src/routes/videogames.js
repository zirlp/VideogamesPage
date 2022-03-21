const { Router } = require("express");
const router = Router();
//prettier-ignore
const { createGame, getGameById } = require("C:/Users/Zirlp/Desktop/Henry/VideogamesPage/PI-Videogames-main/api/Controllers/game_controllers.js");

router.get("/:id", getGameById);
router.post("/add", createGame);

module.exports = router;
