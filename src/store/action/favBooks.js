import { apiCall } from "../../apiCall";
import { getId } from "../../localStorageFunction";

export const getFavBooks = () => {
  //`https://bookstore-b-end-bykks.onrender.com/user/${}?_embed=favorites`
  const id = getId();

  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    const response = await apiCall(
      `https://bookstore-b-end-bykks.onrender.com/user/${id}?_embed=favorites`,
      "get"
    );
    const data = response.data.favorites;
    console.log(data, "is data");
    dispatch({
      type: "GETFAVBOOKS",
      payload: data,
    });
    dispatch({
      type: "SET_LOADING",
      payload: false,
    });
  };
};
