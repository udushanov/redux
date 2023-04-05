import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from "./redux/actions";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./styles.css";
import { composeWithDevTools } from "redux-devtools-extension";

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");
const counter = document.getElementById("counter");

function myLogger(state) {
  return function (next) {
    return function (action) {
      console.log("State", state.getState());
      console.log("Action", action);
      return next(action);
    };
  };
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter.count;

  document.body.className = state.theme.value;

  [addBtn, subBtn, themeBtn, asyncBtn].forEach(item => {
    item.disabled = state.theme.disabled;
  });
});

store.dispatch({ type: "INIT_APPLICATION" });
