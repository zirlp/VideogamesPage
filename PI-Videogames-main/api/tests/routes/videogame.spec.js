/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn, Genre } = require("../../src/db.js");

const agent = session(app);
// const videogame = {
//   name: "Test Game",
//   description:
//     "This is a test for Henry Individual Proyect of a Single Page Aplication (SPA), and should work.",
//   released: "2022-03-28",
//   rating: 3.11,
//   background_image:
//     "https://phantom-marca.unidadeditorial.es/252acdd64f48851f815c16049a789f23/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/19/16188479459744.jpg",
//   genres: ["Indie", "Simulation"],
//   platforms: ["PC", "macOS"],
// };

describe("Videogame routes", () => {
  // before(() =>
  //   conn.authenticate().catch((err) => {
  //     console.error("Unable to connect to the database:", err);
  //   })
  // );
  // beforeEach(() =>
  //   Videogame.sync({ force: true }).then(() => Videogame.create(videogame))
  // );
  describe("GET /videogames", () => {
    it("should get 200", () => agent.get("/videogames").expect(200)).timeout(
      5000
    );
  });

  //test---------------------------------------------------------------------------------------------
});

describe("Genres route", () => {
  // before(() =>
  //   conn.authenticate().catch((err) => {
  //     console.error("Unable to connect to the database:", err);
  //   })
  // );
  // beforeEach(() => Genre.sync({ force: true }));

  it("GET /genres", () => {
    it("should get 200", () => agent.get("/genres").expect(200)).timeout(5000);
  });
});
