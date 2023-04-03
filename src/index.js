import "./styles.css";
import { createStore } from "./createStore";
import { rootReducer } from "./redux/rootReducer";

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");
const counter = document.getElementById("counter");

const initialState = {
  count: 0,
};

const store = createStore(rootReducer, initialState);

addBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

subBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

asyncBtn.addEventListener("click", () => {});

themeBtn.addEventListener("click", () => {
  // document.body.classList.toggle("dark");
});

store.subscribe(() => {
  const text = store.getState().count;
  counter.textContent = text.toString();
});

store.dispatch({ type: "INIT_APPLICATION" });
