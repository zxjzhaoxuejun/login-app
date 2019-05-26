const LOGIN = "LOGIN ";
const LOGOUT = "LOGOUT";
const userInit = {
  isAuth: false,
  userName: "赵学军"
};

// reducer
export const auth = (state = userInit, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

// action
export const login = () => {
  return { type: LOGIN };
};

export const logout = () => {
  return { type: LOGOUT };
};
