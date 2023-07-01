import axios from "axios";
import { EachBook } from "./eachbook";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { apiCall } from "../apiCall";
import { getId } from "../localStorageFunction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartBooks } from "../store/action/cartBook";
import { getFavBooks } from "../store/action/favBooks";
import { useNavigate } from "react-router";
export const AddToCart = ({ eachBook, setIsOpen, price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let favBooks = useSelector((store) => store.favBooks.favBooks);
  const [isFavButton, setIsFavButton] = useState(true);
  console.log(favBooks[1]);
  let result = favBooks.filter(
    (obj) => eachBook.volumeInfo.title === obj.Title
  );
  console.log(result);
  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  // let price = Math.floor(Math.random() * 10) + 1;

  const addToCart = async (eachBook) => {
    const product = {
      Title: eachBook.volumeInfo.title,
      Author: eachBook.volumeInfo.authors[0],
      qty: qty,
      img: eachBook.volumeInfo.imageLinks.thumbnail,
      userId: Number(id),
      price: price,
      totalPrice: price * qty,
    };
    await apiCall(
      `https://bookstore-b-end-bykks.onrender.com/cartItems`,
      "post",
      product
    );
    dispatch(getCartBooks());
  };
  const id = getId();

  return (
    <div className="addToCart">
      <img src={eachBook.volumeInfo.imageLinks.thumbnail} className="cartimg" />
      <div className="cartText">
        <div>Title: {eachBook.volumeInfo.title}</div>
        <div> Author: {eachBook.volumeInfo.authors[0]}</div>
        <div className="date">Date: {eachBook.volumeInfo.publishedDate}</div>
        <div className="price">Price: {price}$</div>
        <div className="calc">
          <div className="qty">Qty:</div>

          <AiOutlineMinus
            className="minus"
            onClick={() => {
              decreaseQty();
            }}
          />
          <div className="counter">{qty}</div>
          <AiOutlinePlus
            className="plus"
            onClick={() => {
              increaseQty();
            }}
          />
        </div>
        <div className="buttonContainer">
          <button
            className="addtocart"
            onClick={() => {
              addToCart(eachBook);
              setIsOpen(false);
            }}
          >
            Add to Cart
          </button>

          <button
            className="cancel"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      {result.length === 0 && (
        <button
          className="fav"
          onClick={() => {
            dispatch(getFavBooks());
            setIsOpen(false);
            navigate("/favorites");
            apiCall(
              "https://bookstore-b-end-bykks.onrender.com/favorites",
              "post",
              {
                Title: eachBook.volumeInfo.title,
                Author: eachBook.volumeInfo.authors[0],
                Date: eachBook.volumeInfo.publishedDate,
                img: eachBook.volumeInfo.imageLinks.thumbnail,
                userId: Number(id),
              }
            );
          }}
        >
          Add to Fav
        </button>
      )}
    </div>
  );
};
/*onClick={() => {
          apiCall("https://bookstore-b-end-bykks.onrender.com/favorites", "post", {
            Title: eachBook.volumeInfo.title,
            Author: eachBook.volumeInfo.authors[0],
            Date: eachBook.volumeInfo.publishedDate,
          });
        }} */
// <GrFavorite className="fav" />
