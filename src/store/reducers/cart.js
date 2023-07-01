const initialState = {
  cartBooks: [],
};
export const cartBooks = (state = initialState, action) => {
  switch (action.type) {
    case "GETCARTBOOKS":
      return { ...state, cartBooks: action.payload };

    default:
      return state;
  }
};
/*case "INCREASE":
        return { ...state, cartBooks: action.payload };
      case "DECREASE":
        return {
          ...state,
          cartBooks: action.payload,
        }; */
