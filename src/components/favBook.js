import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../apiCall";
import { getFavBooks } from "../store/action/favBooks";

export const FavBook = ({
  title,
  img,
  author,
  publishedDate,
  eachBook,
  id,
  apiForFav,
}) => {
  const dispatch = useDispatch();
  console.log(apiForFav);
  console.log(img, "is img");
  console.log(title);
  console.log(author);
  const removeFun = async () => {
    console.log(id);
    await apiCall(
      `https://bookstore-b-end-bykks.onrender.com/favorites/${id}`,
      "delete"
    );
    dispatch(getFavBooks());
  };

  return (
    <div className="eachBook">
      <img src={img} className="imgEachBook" />
      <div className="eachBookText">
        <div className="title">Title: {title}</div>
        <div className="author">Author: {author}</div>
        <div className="publishedDate">publishedDate :{publishedDate}</div>
        <button
          className="remove"
          onClick={() => {
            removeFun();
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
