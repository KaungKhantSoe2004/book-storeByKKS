import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { apiCall } from "../apiCall";
import { useDispatch } from "react-redux";
import { getCartBooks } from "../store/action/cartBook";

export const EachCart = ({ img, price, subPrice, qty, title, eachObj }) => {
  const dispatch = useDispatch();

  const increaseQty = async () => {
    let quantity = qty + 1;
    let subPrc = subPrice + price;
    console.log(quantity, subPrc);
    console.log(eachObj);
    await apiCall(
      `https://bookstore-b-end-bykks.onrender.com/cartItems/${eachObj.id}`,
      "put",
      {
        ...eachObj,
        qty: quantity,
        totalPrice: subPrc,
      }
    );
    dispatch(getCartBooks());
  };
  const decreaseQty = async () => {
    if (qty === 1) {
      await apiCall(
        `https://bookstore-b-end-bykks.onrender.com/cartItems/${eachObj.id}`,
        "delete"
      );
      dispatch(getCartBooks());
    } else {
      let quantity = qty - 1;
      let subPrc = subPrice - price;
      console.log(quantity, subPrc);
      await apiCall(
        `https://bookstore-b-end-bykks.onrender.com/cartItems/${eachObj.id}`,
        "put",
        {
          ...eachObj,
          qty: quantity,
          totalPrice: subPrc,
        }
      );
      dispatch(getCartBooks());
    }
  };
  return (
    <div className="eachCart">
      <img
        src={img} //"http://books.google.com/books/content?id=kr09DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        className="cartImg"
      />
      <div className="textCart">
        <div className="textTitle">Title: {title}</div>
        <div className="textButtons">
          Qty:
          <AiOutlineMinus
            className="minus"
            onClick={() => {
              decreaseQty();
            }}
          />
          <div className="qty">{qty}</div>
          <AiOutlinePlus
            className="plus"
            onClick={() => {
              increaseQty();
            }}
          />
        </div>
        <div className="Cartprice">Price: {price}$</div>
      </div>
      <div className="subTotalPrice">
        <div>Sub Total: {subPrice}$</div>
      </div>
    </div>
  );
};
