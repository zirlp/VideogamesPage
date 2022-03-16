const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genres = require("./genres.js");
const videogames = require("./videogames.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogames);
router.use("/genres", genres);

router.get("/", (req, res) => {
  res.status(200).send("hello from homepage");
});

module.exports = router;
