import {
  ADD,
  CLEAN_QUERY,
  DELETE_GAME,
  FILTER_QUERY,
  GAME_QUERY,
  GET_ALL,
  GET_GENRES,
  GET_GAME_DETAIL,
  ORDER,
  REMOVE_FILTERS,
  GET_PLATFORMS,
  RESET,
} from "../Actions/Constants";

const initState = {
  allVideoGames: [],
  genres: [],
  platforms: [],
  gameDetail: {},
  order: [],
  gameQuery: [],
  filterQuery: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        allVideoGames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case ADD:
      return {
        ...state,
      };
    case GET_GAME_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };

    case ORDER:
      return {
        ...state,
        order: action.payload,
      };

    case GAME_QUERY:
      return {
        ...state,
        gameQuery: action.payload,
      };

    case FILTER_QUERY:
      return {
        ...state,
        filterQuery: action.payload,
      };

    case CLEAN_QUERY:
      return {
        ...state,
        gameQuery: action.payload,
      };

    case REMOVE_FILTERS:
      return {
        ...state,
        filterQuery: action.payload,
      };

    case DELETE_GAME:
      return {
        ...state,
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };

    case RESET:
      return {
        allVideoGames: [],
        genres: [],
        platforms: [],
        gameDetail: {},
        order: [],
        gameQuery: [],
        filterQuery: [],
      };

    default:
      return state;
  }
}

export default reducer;

// // en caso de plat
// if (state.platforms.find((plat) => plat.name === action.payload)) {
//   return {
//     ...state,
//     filterQuery: state.allVideoGames.filter((game) =>
//       game.platforms.includes(action.payload)
//     ),
//   };
// }
// //caso gen
// if (state.genres.find((gen) => gen.name === action.payload)) {
//   return {
//     ...state,
//     filterQuery: state.allVideoGames.filter((game) =>
//       game.genres.includes(action.payload)
//     ),
//   };
// }
