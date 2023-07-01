import { CiSearch } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { EachBook } from "../components/eachbook";
import { useEffect, useState } from "react";
import { apiCall } from "../apiCall";
import axios from "axios";
import { AddToCart } from "../components/addtocart";
import store from "../store";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/action/productAction";
import { getName } from "../localStorageFunction";
import { useNavigate } from "react-router";
import { getCartBooks } from "../store/action/cartBook";

export const Home = ({ name, setName }) => {
  const [books, SetBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [inputedValue, setInputedValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isError, setIsError] = useState(false);
  const [eachBook, setEachBook] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);
  setName(getName());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiCallForHome = async () => {
    await axios
      .get("https://www.googleapis.com/books/v1/volumes?q=2019")
      .then((Response) => SetBooks(Response.data.items));
  };
  let bookArray = useSelector((store) => store.product.products);
  let cartArray = useSelector((store) => store.cartBooks.cartBooks);
  console.log(cartArray, "is array oadsf");
  const [searchValue, setSearchValue] = useState("");
  console.log(books);
  console.log(bookArray);
  const [price, setPrice] = useState(1);
  // const [isAdded, setIsAdded] = useState(false);
  // SetBooks(bookArray);
  useEffect(() => {
    // apiCallForHome();
    dispatch(getProducts("2019"));
    dispatch(getCartBooks());
  }, []);
  const searchHandle = async () => {
    if (inputedValue !== "") {
      setIsSearch(true);
      setSearchValue(inputedValue);
      dispatch(getProducts(`${inputedValue}`));
      /* try {
        setIsSearch(true);
        await axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${inputedValue}`)
          .then((Response) => {
            if (Response.data.items !== undefined) {
              console.log(Response.data.items);
              SetBooks(Response.data.items);
            } else {
              console.log(Response.data.items);
              setIsError(true);
              SetBooks([]);
            }
            //  SetBooks(Response.data.items);
          });
      } catch (error) {
        setIsError(true);
        alert(error);
        SetBooks([]);
        console.log(error);
      }*/
    }
  };
  if (bookArray === undefined) {
    return <h1>No books</h1>;
  }
  return (
    <div>
      <div className={`home ${isOpen && "background"}`}>
        <div className={`user ${theme && "whiteStory"}`}>User Name: {name}</div>
        <div className="inputContainer">
          <input
            value={inputedValue}
            placeholder="Search Books by Authors or Title"
            className="searchInput"
            onChange={(event) => {
              setInputedValue(event.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              searchHandle();
              setInputedValue("");
            }}
          >
            <CiSearch />
          </button>

          <BsCartDash
            className="cartLogo"
            onClick={() => {
              navigate("/cart");
            }}
          />
          <div className="count">{cartArray.length}</div>
        </div>
        <div className={`topic ${theme && "whiteStory"}`}>
          {isSearch
            ? `Books for searching ${searchValue}`
            : "2019's Best selling Books"}
          {isError && `There is not match Books for ${inputedValue}`}
        </div>
        <div className="homeBody">
          {bookArray.length === 0 && <div className="noBook">No Books</div>}
          {bookArray.length !== 0 &&
            bookArray?.map((eachBook, index) => (
              <div
                onClick={() => {
                  if (
                    eachBook.volumeInfo.imageLinks === undefined ||
                    eachBook.volumeInfo.authors === undefined
                  ) {
                    return;
                  }
                  setIsOpen(true);
                  setEachBook(eachBook);
                  setPrice(Math.floor(Math.random() * 10) + 1);
                }}
              >
                {eachBook.volumeInfo.imageLinks === undefined ||
                eachBook.volumeInfo.authors === undefined ? (
                  <div className="eachBook errorShow">
                    Sorry, we can't proceed this book for connection error.
                  </div>
                ) : (
                  <EachBook
                    key={index}
                    title={eachBook.volumeInfo.title}
                    img={eachBook.volumeInfo.imageLinks.thumbnail}
                    author={eachBook.volumeInfo.authors[0]}
                    publishedDate={eachBook.volumeInfo.publishedDate}
                    description={eachBook.volumeInfo.description}
                    eachBook={eachBook}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
      {isOpen && (
        <div className="haha">
          <AddToCart eachBook={eachBook} setIsOpen={setIsOpen} price={price} />
        </div>
      )}
    </div>
  );
};
/*   <div className="homeBody">
          {bookArray.length === 0 && <div className="noBook">No Books</div>}
          {bookArray.length !== 0 &&
            bookArray?.map((eachBook, index) => (
              <div
                onClick={() => {
                  if (
                    eachBook.volumeInfo.imageLinks === undefined ||
                    eachBook.volumeInfo.authors === undefined
                  ) {
                    return;
                  }
                  setIsOpen(true);
                  setEachBook(eachBook);
                }}
              >
             
                {eachBook.volumeInfo.imageLinks === undefined ||
                eachBook.volumeInfo.authors === undefined ? 
                  <div className="eachBook errorShow">
                    Sorry, we can't proceed this book for connection error.</div>
                                : 
                  <EachBook
                    key={index}
                    title={eachBook.volumeInfo.title}
                    img={eachBook.volumeInfo.imageLinks.thumbnail}
                    author={eachBook.volumeInfo.authors[0]}
                    publishedDate={eachBook.volumeInfo.publishedDate}
                    description={eachBook.volumeInfo.description}
                    eachBook={eachBook}
                  />
                }
              </div>
            ))}
        </div>*/
