const initialState = {
  favBooks: [],
};
export const favBooks = (state = initialState, action) => {
  switch (action.type) {
    case "GETFAVBOOKS":
      return { ...state, favBooks: action.payload };
    default:
      return state;
  }
};
