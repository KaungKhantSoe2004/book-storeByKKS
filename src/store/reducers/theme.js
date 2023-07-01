const initialState = {
  theme: false,
};
export const theme = (state = initialState, action) => {
  switch (action.type) {
    case "WHITE":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
