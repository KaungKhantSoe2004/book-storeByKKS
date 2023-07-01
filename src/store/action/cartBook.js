import { apiCall } from "../../apiCall";
import { getId } from "../../localStorageFunction";

export const getCartBooks = () => {
  const id = getId();
  console.log("id is", id);
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    const response = await apiCall(
      `https://bookstore-b-end-bykks.onrender.com/user/${Number(
        id
      )}?_embed=cartItems`,
      "get"
    );
    let data = response.data.cartItems;
    console.log(data, "is Cart array");
    dispatch({
      type: "GETCARTBOOKS",
      payload: data,
    });
    dispatch({
      type: "SET_lOADING",
      payload: false,
    });
  };
};

/*export const decQty = ()=> {
  return async (dispatch)=> {
    dispatch({
      type: ""
    })
  }
} */
