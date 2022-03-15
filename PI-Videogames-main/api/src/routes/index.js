const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const { Genre, Videogame } = require("../db");
const fetch = require("fetch");
const { findAll } = require("sequelize");
const { json } = require("body-parser");
require("dotenv").config();
const { API_KEY } = process.env;
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/home", (req, res) => {
  fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then((r) => json(r))
    .then((data) => console.log(data));
});

// router.get("/genres", (req, res) => {
//   res.send("todos los generos");
// });

// router.get("/videogames/:game", (req, res) => {
//   res.send("detalles");
// });

// router.post("/videogames", (req, res) => {
//   //se pasa la data por medio del form y el body en el back
//   const { name, description, releaseDate, rating, platforms } = req.body;

//   res.json("fn addGame (name, description, releaseDate, rating, platforms)");
// });

module.exports = router;
