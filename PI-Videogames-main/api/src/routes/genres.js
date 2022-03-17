const { Router } = require("express");
const router = Router();
const { Genre } = require("../db");

router.get("/", async (req, res) => {
  // esto solo busca en la db

  const genres = await Genre.findAll();

  if (!genres.length) {
    return res.status(400).send({
      message: "No genres were found",
    });
  }
  res.send(genres);
});

module.exports = router;
