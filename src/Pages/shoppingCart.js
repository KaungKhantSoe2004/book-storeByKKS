import { useNavigate } from "react-router";
import { EachCart } from "../components/eachCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartBooks } from "../store/action/cartBook";
import { apiCall } from "../apiCall";

export const ShoppingCart = ({ name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const arr = useSelector((store) => store.cartBooks.cartBooks);
  let totalPrice = 0;
  const allClearHandle = async () => {
    for (let i = 0; i < arr.length; i++) {
      const id = arr[i].id;
      console.log(id);
      await apiCall(
        `https://bookstore-b-end-bykks.onrender.com/cartItems/${id}`,
        "delete"
      );
      dispatch(getCartBooks());
    }
  };
  const orderHandle = () => {
    allClearHandle();
    navigate("/");
    alert("Thank you for shopping with us. We really appreciate your business");
  };
  useEffect(() => {
    dispatch(getCartBooks());
  }, []);

  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    totalPrice += arr[i].totalPrice;
  }
  console.log("total price is", totalPrice);
  return (
    <div className={`shoppingCart ${theme && "whiteShoppingCart"}`}>
      <button
        className="backToHome"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button>
      <button
        className=" backToHome clear"
        onClick={() => {
          allClearHandle();
        }}
      >
        Clear all
      </button>
      <h2 className={`cartHeader ${theme && "whiteCartHeader"}`}>
        {name}'s Cart
      </h2>

      <div className="cartBody">
        {arr.length === 0 && (
          <h2 className="noCart">
            Currently, there are no books in {name}'s Cart
          </h2>
        )}
        {arr?.map((eachObj, index) => (
          <EachCart
            key={index}
            eachObj={eachObj}
            img={eachObj.img}
            price={eachObj.price}
            subPrice={eachObj.totalPrice}
            qty={eachObj.qty}
            title={eachObj.Title}
          />
        ))}
      </div>
      <div className="sticky">
        <div className="cartFooter">Grand Total: {totalPrice}$ </div>

        <div className="cartButtonContainer">
          <button
            className="order"
            onClick={() => {
              orderHandle();
            }}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};
/* {arr?.map((eachObj, index) => (
          <EachCart key={index} />
        ))}*/
