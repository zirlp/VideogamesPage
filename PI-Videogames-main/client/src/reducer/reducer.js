import {
  ADD,
  CLEAN_QUERY,
  DELETE_GAME,
  FILTER_QUERY,
  GAME_QUERY,
  GETALL,
  GETGENRES,
  GET_GAME_DETAIL,
  ORDER,
  REMOVE_FILTERS,
} from "../Actions/Constants";

const initState = {
  allVideoGames: [],
  genres: [],
  gameDetail: {},
  order: [],
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

    default:
      return state;
  }
}

export default reducer;
