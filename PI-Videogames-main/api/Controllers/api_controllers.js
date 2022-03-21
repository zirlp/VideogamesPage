require("dotenv").config();
// const { API_KEY } = process.env;
const API_KEY = "49ddff1dc19f434dbf0139f7c1eab75a";
const axios = require("axios");
const { Genre } = require("../src/db.js");

async function loadGenresOnDb() {
  try {
    let page = 1;
    let allGenres = new Set();
    while (page <= 5) {
      let apiResponse = axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`
      );
      await apiResponse.then((res) =>
        res.data.results.map((game) => {
          game.genres.map((genre) => {
            allGenres.add(`${genre.name}`);
          });
        })
      );
      page++;
    }
    //set hace objetos de valores únicos y [...spread lo hace array]
    return Promise.all([...allGenres]).then((allGenres) => {
      for (let i = 0; i < allGenres.length; i++) {
        Genre.create({
          name: allGenres[i],
        });
      }
    });
  } catch (err) {
    return { message: "No genres loaded" };
  }
}

async function getGamesFromApi() {
  try {
    let page = 1;
    let allGames = [];
    while (page <= 5) {
      let apiResponse = axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`
      );
      await apiResponse.then((r) =>
        r.data.results.map((game) => {
          allGames.push({
            id: game.id,
            name: game.name,
            released: game.released,
            rating: game.rating,
            platforms: game.platforms.map((platform) => platform.platform.name),
            genres: game.genres.map((genre) => genre.name),
            image: game.background_image,
          });
        })
      );
      page++;
    }
    return Promise.all(allGames).then((r) => r.flat());
  } catch (err) {
    {
      return { message: "No games found in api controller" };
    }
  }
}

module.exports = {
  loadGenresOnDb,
  getGamesFromApi,
};
