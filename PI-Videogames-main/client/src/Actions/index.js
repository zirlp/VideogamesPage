import {
  GET_GAME_DETAIL,
  GETALL,
  GETGENRES,
  GAME_QUERY,
  CLEAN_QUERY,
  FILTER_QUERY,
  REMOVE_FILTERS,
  DELETE_GAME,
  ORDER,
} from "./Constants";
import axios from "axios";

//importar info de axios (de la api)

export function getGames() {
  return async function (dispatch) {
    let request = await axios.get("http://127.0.0.1:3001/videogames");
    // const allGames = request.data;
    try {
      return dispatch({ type: GETALL, payload: request.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getGenres() {
  return async function (dispatch) {
    let requestGenres = await axios.get("http://127.0.0.1:3001/genres");
    // const allGenres = requestGenres.data;
    try {
      return dispatch({ type: GETGENRES, payload: requestGenres.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function addGame(payload) {
  return async (dispatch) => {
    try {
      const post = await axios.post(
        "http://127.0.0.1:3001/videogames/add",
        payload
      );
      return post;
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getGameDetail(id) {
  return async (dispatch) => {
    try {
      const requestDetail = await axios.get(
        `http://127.0.0.1:3001/videogames/${id}`
      );
      return dispatch({ type: GET_GAME_DETAIL, payload: requestDetail.data });
    } catch (error) {
      window.location.replace("/nope");
    }
  };
}

export function orderBy(payload) {
  return (dispatch) => {
    return dispatch({
      type: ORDER,
      payload: payload,
    });
  };
}

export function gameQuery(payload) {
  return (dispatch) => {
    return dispatch({
      type: GAME_QUERY,
      payload: payload,
    });
  };
}

export function filterQuery(payload) {
  return (dispatch) => {
    return dispatch({
      type: FILTER_QUERY,
      payload: payload,
    });
  };
}

export function cleanQuery() {
  return (dispatch) => {
    return dispatch({
      type: CLEAN_QUERY,
      payload: [],
    });
  };
}

export function removeFilters() {
  return (dispatch) => {
    return dispatch({
      type: REMOVE_FILTERS,
      payload: [],
    });
  };
}

export function deleteGame(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`http://127.0.0.1:3001/videogames/${id}`);
      return dispatch({ type: DELETE_GAME });
    } catch (error) {
      console.log(error.message);
    }
  };
}
