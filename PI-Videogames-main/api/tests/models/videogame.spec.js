const { Videogame, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Videogame model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Videogame.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should work when its a valid name", () => {
        Videogame.create({ name: "Super Mario Bros" });
      });

      // test ---------------------------------------------------------------------------------------------------------------

      it("should create a new game with all values specified", (done) => {
        Videogame.create({
          name: "Test Game",
          description:
            "This is a test for Henry Individual Proyect of a Single Page Aplication (SPA), and should work.",
          released: "2022-03-28",
          rating: 3.11,
          background_image:
            "https://phantom-marca.unidadeditorial.es/252acdd64f48851f815c16049a789f23/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/19/16188479459744.jpg",
          genres: ["Indie", "Simulation"],
          platforms: ["PC", "macOS"],
        })
          .then(() => done())
          .catch(() => done(new Error("it should create a new Videogame")));
      });
    });
  });
});
