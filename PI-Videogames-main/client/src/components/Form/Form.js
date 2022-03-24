import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getGames, getGenres, addGame } from "../../Actions/index.js";
import Navbar from "../Navbar/Navbar";

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Game name is required";
  } else if (!input.description) {
    errors.description = "Game description is required";
  } else if (!input.released) {
    errors.released = "A release date is required";
    //prettier-ignore
  } else if (
    !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input.released)
  ) {
    errors.released = "Date is invalid";
  } else if (!input.rating) {
    errors.rating = "You must rate this game";
  } else if (input.rating > 5 || input.rating < 0) {
    errors.rating = "Rating must be above 0 and under 5";
  } else if (!input.image) {
    errors.image = "Url is invalid";
    //prettier-ignore
  } else if (
    !/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(
      input.image
    )
  ) {
    errors.image = "Url is invalid";
  } else if (!input.genres.length) {
    errors.genres = "You must select at least 1 genre";
  }

  return errors;
}

const Form = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allVideoGames);
  const everyPlatformsArray = allGames.map((p) => p.platforms);
  const allPlatforms = [...new Set(everyPlatformsArray.flat())];
  //filtro todas las plataformas por el front ya que no las necesito en la db.

  //seteo los errores para controlar el form
  const [errors, setErrors] = useState({});
  //esto se mandará al back para hacer el post
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    image: "",
    platforms: [],
    genres: [],
  });

  //dispacho getGames para acceder a los generos desde el estado.
  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    setErrors(
      validate({
        ...input,
      })
    );
  }, [input]);

  //guardo los generos en una variable
  const genres = useSelector((state) => state.genres);

  //handlers --------------------------------------------------
  //guardo los géneros en el input
  const handleGenres = (gen) => {
    if (!input.genres.includes(gen.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, gen.target.value],
      });
      setErrors(
        validate({
          ...input,
        })
      );
    }
  };
  //un filtro para eliminar los generos
  const deleteGenre = (gen) => {
    gen.preventDefault();
    setInput({
      ...input,
      genres: input.genres.filter((f) => f !== gen.target.name),
    });
    setErrors(
      validate({
        ...input,
      })
    );
  };
  //lo mismo para platforms
  const handlePlatforms = (plat) => {
    if (!input.platforms.includes(plat.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, plat.target.value],
      });
      setErrors(
        validate({
          ...input,
        })
      );
    }
  };

  const deletePlatform = (plat) => {
    plat.preventDefault();
    setInput({
      ...input,
      platforms: input.platforms.filter((f) => f !== plat.target.name),
    });
    setErrors(
      validate({
        ...input,
      })
    );
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (ok) => {
    ok.preventDefault();
    dispatch(addGame(input));
    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      image: "",
      platforms: [],
      genres: [],
    });
    alert("Game added to db");
  };
  //---------------------------------------------------------------

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label>Game name:</label>
          <input
            className={errors.name && "danger"}
            type="text"
            name="name"
            onChange={handleInputChange}
            value={input.name}
          />
          {errors.name && <p className="danger">{errors.name}</p>}
        </div>
        <div className="description">
          <label>Description:</label>
          <input
            className={errors.descripton && "danger"}
            type="text"
            name="description"
            onChange={handleInputChange}
            value={input.descripton}
          />
          {errors.description && <p className="danger">{errors.description}</p>}
        </div>
        <div className="released">
          <label>Release date:</label>
          <input
            className={errors.released && "danger"}
            type="text"
            name="released"
            placeholder="yyyy-mm-dd"
            onChange={handleInputChange}
            value={input.released}
          />
          {errors.released && <p className="danger">{errors.released}</p>}
        </div>
        <div className="rating">
          <label>Rating:</label>
          <input
            className={errors.rating && "danger"}
            type="text"
            name="rating"
            placeholder="from 0 to 5"
            onChange={handleInputChange}
            value={input.rating}
          />
          {errors.rating && <p className="danger">{errors.rating}</p>}
        </div>
        <div className="rating">
          <label>Image Url:</label>
          <input
            className={errors.image && "danger"}
            type="text"
            name="image"
            placeholder="url"
            onChange={handleInputChange}
            value={input.image}
          />
          {errors.image && <p className="danger">{errors.image}</p>}
        </div>
        <div>
          <label>Select genre:</label>
          <select onChange={handleGenres}>
            {genres.map((genres) => (
              <option value={genres.name} key={genres.name}>
                {genres.name}
              </option>
            ))}
          </select>
        </div>
        <div className={errors.genres && "danger"} name={"genres"}>
          {input.genres.map((genre) => (
            <button onClick={deleteGenre} name={genre} key={genre}>
              {genre}
            </button>
          ))}
          {errors.genres && <p className="danger">{errors.genres}</p>}
        </div>
        <div>
          <label>Select platform:</label>
          <select onChange={handlePlatforms}>
            {allPlatforms.map((platform) => (
              <option value={platform} key={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        <div className={errors.platforms && "danger"} name={"platforms"}>
          {input.platforms.map((platform) => (
            <button onClick={deletePlatform} name={platform} key={platform}>
              {platform}
            </button>
          ))}
          {errors.platforms && <p className="danger">{errors.platforms}</p>}
        </div>
        <input type={"submit"} />
      </form>
    </div>
  );
};

export default Form;
