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

function getData() {
  axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}`, {
      params: { page: 1 },
    })
    .then((res) => {
      const allGenres = new Set();
      res.data.results.map((game) => {
        game.genres.map((genre) => {
          allGenres.add(genre.name);
          // if (!arr.includes(genre.name)) {
          //   arr.push(genre.name);
          // }
        });
      });
      // console.log(allGenres);

      // .then((r) => {
      //   r.forEach((genre) => {
      //     console.log(genre.name);
      //   });
      // });

      // try {
      //   await Genre.create({
      //     id: game.genre.id,
      //     name: game.genre.name,
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
    });
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
