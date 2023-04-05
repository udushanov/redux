import {
  CHANGE_THEME,
  DECREMENT,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
  INCREMENT,
} from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disabelButtons());
    setTimeout(() => {
      dispatch(increment());
      dispatch(enabelButtons());
    }, 2000);
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}

export function enabelButtons() {
  return {
    type: ENABLE_BUTTONS,
  };
}

export function disabelButtons() {
  return {
    type: DISABLE_BUTTONS,
  };
}
