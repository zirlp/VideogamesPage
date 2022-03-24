import {
  ADD,
  CLEAN_QUERY,
  FILTER_QUERY,
  GAME_QUERY,
  GETALL,
  GETGENRES,
  GET_GAME_DETAIL,
} from "../Actions/Constants";

const initState = {
  allVideoGames: [],
  genres: [],
  gameDetail: {},
  gameQuery: [],
  filterQuery: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case GETALL:
      return {
        ...state,
        allVideoGames: action.payload,
      };
    case GETGENRES:
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
    case GAME_QUERY:
      return {
        ...state,
        // allVideoGames: action.payload,
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

    default:
      return state;
  }
}

export default reducer;
