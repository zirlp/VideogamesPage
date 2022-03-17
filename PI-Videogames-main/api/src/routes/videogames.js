const { Router } = require("express");
const router = Router();
const { Videogame } = require("../db");
const axios = require("axios");
const API_KEY = "49ddff1dc19f434dbf0139f7c1eab75a";

router.get("/", async (req, res) => {
  //trae los primeros 20 juegos
  const page1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);

  const page1Names = await page1.data.results.map((game) => {
    return { name: `${game.name}` };
  });

  res.send(page1Names);
});

router.get("/:id", async (req, res) => {
  // esto solo busca en la db
  const { id } = req.params;
  const game = await Videogame.findOne({
    where: {
      id,
    },
  });
  if (!game) {
    return res.status(400).send({
      message: "No games found",
    });
  }
  res.send(game);
});

router.post("/add", async (req, res) => {
  //se pasa la data por medio del form y el body en el back
  // solo busca si existen en la db
  const { name, released, rating } = req.body;
  if (!name || !released || !rating) {
    return res.status(400).send({
      message: "All spaces must be specified",
    });
  }
  let gameExists = await Videogame.findOne({
    where: {
      name,
    },
  });
  if (gameExists) {
    return res.status(400).send({
      message: "this game already exists",
    });
  }

  try {
    let newGame = await Videogame.create({
      name,
      released,
      rating,
    });
    res.json({ newGame });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
});

module.exports = router;
