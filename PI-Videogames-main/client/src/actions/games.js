import { ADD, GET15 } from "./creator";

//importar info de axios (de la api)

export const getGames = () => async (dispatch) => {
  try {
    const { data } = await fetchGames();
    //^aqui va la fn de axios
    dispatch({ type: GET15, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
