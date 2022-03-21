const axios = require("axios");

const { Videogame, Genre } = require("../src/db.js");
const API_KEY = "49ddff1dc19f434dbf0139f7c1eab75a";
//prettier-ignore
const { getGamesFromApi } = require("C:/Users/Zirlp/Desktop/Henry/VideogamesPage/PI-Videogames-main/api/Controllers/api_controllers.js");

async function getAllGames(req, res) {
  try {
    return Promise.all([getGamesFromDb(), getGamesFromApi()]).then((all) => {
      res.send(all.flat());
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
}

async function getGameById(req, res) {
  const { id } = req.params;

  try {
    const findinDb = getGamesFromDb().then(
      (dbGames) => dbGames.find((db_game) => db_game.id === id) //All db_game_id are strings
    );

    const findinApi = getGamesFromApi().then(
      (apiGames) => apiGames.find((api_game) => api_game.id === parseInt(id)) //All api_game_id are numbers
    );

    findinDb.then((found_inDb) =>
      found_inDb
        ? res.send(found_inDb)
        : findinApi.then((found_inApi) => {
            found_inApi
              ? axios
                  .get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                  .then((e) => {
                    //prettier-ignore
                    const {name, description, released, rating, platforms, image, genres, } = e.data;
                    const gameDetail = {
                      id,
                      name,
                      description,
                      released,
                      rating,
                      platforms: platforms.map((p) => p.platform.name),
                      image,
                      genres: genres.map((g) => g.name),
                    };
                    res.send(gameDetail);
                  })
              : res.status(404).send("There's no details for this game.");
          })
    );
  } catch (err) {
    res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
}

async function createGame(req, res) {
  // works only for db data.
  const { name, description, released, rating, platforms, image, genres } =
    req.body;
  //prettier-ignore
  if (!name || !description || !released || !rating || !platforms || !image || !genres ) {
    return res.status(406).send({
      message: "All spaces must be specified.",
    });
  }
  let gameExists = await Videogame.findOne({
    where: {
      name,
    },
  });
  if (gameExists) {
    return res.status(400).send({
      message: "The game with the specified name already exists.",
    });
  }
  //if game does not exists on db:
  try {
    await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      image,
    }).then((new_game) => {
      Genre.findAll({ where: { name: genres } }).then((genre) => {
        new_game.addGenre(genre);
      });
    });
    res.status(200).send("The game was added correctly to the db.");
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
}

async function getGamesFromDb() {
  const createdGames = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return createdGames.map((game) => {
    //prettier-ignore
    const { id, name, description, released, rating, platforms, image, genres } = game;
    return {
      id,
      name,
      description,
      released,
      rating,
      platforms,
      image,
      genres: genres.map((g) => g.name),
    };
  });
}

module.exports = {
  getGameById,
  createGame,
  getGamesFromDb,
  getAllGames,
};
