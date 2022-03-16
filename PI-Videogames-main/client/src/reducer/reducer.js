import { ADD, GET15 } from "../actions/creator";

export default (games = [], action) => {
  switch (action.type) {
    case ADD:
      return [...games, action.payload]; //o por donde pase la info
    case GET15:
      return action.payload;
  }
};
