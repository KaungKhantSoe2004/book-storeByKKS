import { useDispatch, useSelector } from "react-redux";
import { EachBook } from "../components/eachbook";
import store from "../store";
import axios from "axios";
import { useEffect, useState } from "react";
import { FavBook } from "../components/favBook";
import { getFavBooks } from "../store/action/favBooks";
import { CgSpinner } from "react-icons/cg";
import { PiSpinnerBold } from "react-icons/pi";
export const Favorites = ({ name }) => {
  const dispatch = useDispatch();
  const [favArray, setFavArray] = useState([]);
  const theme = useSelector((state) => state.theme.theme);
  /*  const apiForFav = async () => {
    await axios
      .get("https://bookstore-b-end-bykks.onrender.com/favorites")
      .then((Response) => setFavArray(Response.data));
  };*/
  useEffect(() => {
    // apiForFav();
    console.log(favArray, "is Array fav");
  }, []);

  let favBooks = useSelector((store) => store.favBooks.favBooks);
  console.log(favBooks, "favbook");
  useEffect(() => {
    dispatch(getFavBooks());
  }, []);
  console.log(favBooks, "is FavBook");
  let loading = useSelector((store) => store.status.loading);
  console.log(loading, "is loading");
  if (loading) {
    return <h1> Loading</h1>;
  }
  return (
    <div className="favorites">
      <h1 className={theme && "whiteStory"}>{name}'s Favorite books</h1>
      <div className="homeBody">
        {favBooks?.map((eachFavArray, index) => (
          <FavBook
            title={eachFavArray.Title}
            author={eachFavArray.Author}
            publishedDate={eachFavArray.Date}
            img={eachFavArray.img}
            id={eachFavArray.id}
            // apiForFav={apiForFav}
          />
        ))}{" "}
      </div>
    </div>
  );
};
/* {favArray.map((eachFavArray, index) => (
          <FavBook
            title={eachFavArray.Title}
            author={eachFavArray.Author}
            publishedDate={eachFavArray.Date}
            img={eachFavArray.img}
            id={eachFavArray.id}
            apiForFav={apiForFav}
          />
        ))}*/
/*     {favBooks?.map((eachFavArray, index) => (
          <FavBook
            title={eachFavArray.Title}
            author={eachFavArray.Author}
            publishedDate={eachFavArray.Date}
            img={eachFavArray.img}
            id={eachFavArray.id}
            apiForFav={apiForFav}
          />
        ))}*/
