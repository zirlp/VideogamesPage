import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./Reducer/Reducer";
import Form from "./components/Form/Form";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

test("Should return initState", () => {
  expect(reducer(undefined, {})).toEqual({
    allVideoGames: [],
    genres: [],
    gameDetail: {},
    order: [],
    gameQuery: [],
    filterQuery: [],
  });
});

describe("Form", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should have a name input", () => {
    const testConst = screen.getByLabelText("Game name:");
    expect(testConst.type).toBe("text");
  });
});
