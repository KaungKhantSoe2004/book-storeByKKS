export const EachBook = ({ title, img, author, publishedDate, eachBook }) => {
  console.log(img, "is img");
  console.log(title);
  console.log(author);
  return (
    <div className="eachBook">
      <img src={img} className="imgEachBook" />
      <div className="eachBookText">
        <div className="title">Title: {title}</div>
        <div className="author">Author: {author}</div>
        <div className="publishedDate">publishedDate :{publishedDate}</div>
      </div>
    </div>
  );
};
/*   <div className="buttonContainer">
        <button className="addToCart">Add to Cart</button>
        <button className="addToFav">Add to Favorites</button>
      </div> */
