import React from "react";
import "./App.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Search from "./components/Search";
import rootReducer from "./reducers";
import Container from "react-bootstrap/Container";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <Container fluid="md">
        <Search/>
      </Container>
    </Provider>
  );
}

export default App;
