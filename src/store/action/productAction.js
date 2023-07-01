import { apiCall } from "../../apiCall";

export const getProducts = (value) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    const response = await apiCall(
      `https://www.googleapis.com/books/v1/volumes?q=${value}`,
      "get"
    );
    const data = response.data.items;
    console.log(data, "is data");
    dispatch({
      type: "ADDPRODUCT",
      payload: data,
    });
    dispatch({
      type: "SET_LOADING",
      payload: false,
    });
  };
};
