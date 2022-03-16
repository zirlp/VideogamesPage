const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("hola desde videogames");
});

// router.get("/:gameid", (req, res) => {
//   res.send("detalles del juego con ese id");
// });

// router.post("/add", (req, res) => {
//   //se pasa la data por medio del form y el body en el back
//   const { name, description, releaseDate, rating, platforms } = req.body;

//   res.json("fn addGame (name, description, releaseDate, rating, platforms)");
// });

module.exports = router;
