import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import store from "./store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getName,
  getToken,
  removeName,
  removeToken,
  removeUser,
} from "./localStorageFunction";
import { getProducts } from "./store/action/productAction";
export const Default = () => {
  const navigate = useNavigate();
  const [isWhite, setIsWhite] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.product.products);
  const handleToHome = () => {
    dispatch(getProducts("percy jackson"));
  };
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/login");
    }
  }, {});
  return (
    <div className={`wrapper ${theme && "whiteWrapper"}`}>
      <div className={`body ${isWhite && "whiteBody"}`}>
        <div className={`navbar ${theme && "whiteNavBar"}`}>
          <img
            src="https://th.bing.com/th/id/OIP.OK9pwXPkqDj4b0QakH-BdwAAAA?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="logo"
            onClick={() => {
              navigate("/");
              handleToHome();
            }}
          />
          <div className="pageContainer">
            <NavLink
              to="/"
              className={`notActive ${theme && "whiteLink"}`}
              // className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={`notActive ${theme && "whiteLink"}`}
            >
              Favorites
            </NavLink>
            <NavLink
              to="/about"
              className={`notActive ${theme && "whiteLink"}`}
            >
              About
            </NavLink>
            <button
              className="logout"
              onClick={() => {
                dispatch({
                  type: "WHITE",
                  payload: !theme,
                });
                console.log(theme);
              }}
            >
              {theme ? "Dark mode" : "Light mode"}
            </button>
            <button
              className="logout "
              onClick={() => {
                removeName();
                removeToken();
                removeUser();
                navigate("/login");
              }}
            >
              Log Out
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
/*<NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "notActive")}
          >
            <CgProfile className="profileLogo" />
          </NavLink>  */
