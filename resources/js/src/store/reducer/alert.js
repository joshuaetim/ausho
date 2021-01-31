const initialState = {
  type: "",
  title: "",
  message: "",
  open: false
};

const alert = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, ...action.data, open: true, type: "success" };
    case "ERROR":
      return {
        open: true,
        type: "danger",
        title: action.error.message,
        message: action.error.errors
      };
    case "CLOSE_ALERT":
      return { open: false, title: "", type: state.type, message: [] };
    default:
      return state;
  }
};

export default alert;
