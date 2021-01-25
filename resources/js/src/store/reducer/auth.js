const initialState = {
  isAuth: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { isAuth: true };
    case "AUTH_ERROR":
      return { isAuth: false };
    default:
      return state;
  }
};

export default auth;
