import "./styles.css";

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");
const counter = document.getElementById("counter");

let state = 0;

function render() {
  counter.textContent = state.toString();
}

addBtn.addEventListener("click", () => {
  state++;
  render();
});

subBtn.addEventListener("click", () => {
  state--;
  render();
});

asyncBtn.addEventListener("click", () => {
  setTimeout(() => {
    state++;
    render();
  }, 1000);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

render();
