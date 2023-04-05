import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

const initialCounter = {
  count: 0,
};

function countReducer(state = initialCounter, action) {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }

  return state;
}

const initialTheme = {
  value: "light",
  disabled: false
};

function themeReducer(state = initialTheme, action) {
    switch (action.type) {
      case CHANGE_THEME:
        return { ...state, value: action.payload };
      case ENABLE_BUTTONS:
        return { ...state, disabled: false };
      case DISABLE_BUTTONS:
        return { ...state, disabled: true };
      default:
        return state;
    }
}

export const rootReducer = combineReducers({
  counter: countReducer,
  theme: themeReducer,
});
