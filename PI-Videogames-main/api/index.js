//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const API_KEY = "49ddff1dc19f434dbf0139f7c1eab75a";
const { Genre } = require("./src/db.js");

async function getData() {
  const allGenres = new Set();

  const page1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);

  await page1.data.results.map((game) => {
    game.genres.map((genre) => {
      allGenres.add(`${genre.name}`);
    });
  });

  try {
    for (let i = 0; i < [...allGenres].length; i++) {
      await Genre.create({
        name: [...allGenres][i],
      });
    }
  } catch (error) {
    return {
      message: "lol nope",
    };
  }

  // await axios
  //   .get(`https://api.rawg.io/api/games?key=${API_KEY}`, {
  //     params: { page: 2 },
  //   })
  //   .then((res) => {
  //     res.data.results.map((game) => {
  //       game.genres.map((genre) => {
  //         allGenres.add(genre.name);
  //       });
  //     });
  //   });
  // await axios
  //   .get(`https://api.rawg.io/api/games?key=${API_KEY}`, {
  //     params: { page: 3 },
  //   })
  //   .then((res) => {
  //     res.data.results.map((game) => {
  //       game.genres.map((genre) => {
  //         allGenres.add(genre.name);
  //       });
  //     });
  //   });
  // await axios
  //   .get(`https://api.rawg.io/api/games?key=${API_KEY}`, {
  //     params: { page: 4 },
  //   })
  //   .then((res) => {
  //     res.data.results.map((game) => {
  //       game.genres.map((genre) => {
  //         allGenres.add(genre.name);
  //       });
  //     });
  //   });
  // await axios
  //   .get(`https://api.rawg.io/api/games?key=${API_KEY}`, {
  //     params: { page: 5 },
  //   })
  //   .then((res) => {
  //     res.data.results.map((game) => {
  //       game.genres.map((genre) => {
  //         allGenres.add(genre.name);
  //       });
  //     });
  //   })
  //   .finally((all) => {
  //     // console.log(allGenres);
  //     allGenres.forEach((o) => {
  //       {
  //         name: `${o}`;
  //       }
  //     });
  //     console.log(allGenres);
  //     // Genre.bulkCreate([...allGenres]).then(console.log("simon"));
  //   });
}
getData();

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    //aqui las fn
  });
});

//create

// try {
//   await Genre.create({
//     id: game.genre.id,
//     name: game.genre.name,
//   });
// } catch (error) {
//   console.log(error);
// }

//includes

// if (!allGenres.includes(genre.name)) {
//   allGenres.push(genre.name);
// }
