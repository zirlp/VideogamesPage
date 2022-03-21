const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genres = require("./genres.js");
const videogames = require("./videogames");
//prettier-ignore

const {
  getAllGames,
} = require("C:/Users/Zirlp/Desktop/Henry/VideogamesPage/PI-Videogames-main/api/Controllers/game_controllers.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogames);
router.use("/genres", genres);

router.get("/", getAllGames);

module.exports = router;
