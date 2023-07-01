import logo from "./logo.svg";
import "./index.css";
import "./App.css";
import store from "./store";
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import { Profiler, useState } from "react";
import { set } from "react-hook-form";
import { Provider, useSelector } from "react-redux";
import { Default } from "./DefaultLayout";
import { Home } from "./Pages/home";
import { Login } from "./Pages/login";
import { Favorites } from "./Pages/favorites";

import { About } from "./Pages/about";
import { ShoppingCart } from "./Pages/shoppingCart";
import { getName } from "./localStorageFunction";

export default function App() {
  const [name, setName] = useState(getName());

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home name={name} setName={setName} />} />
            <Route path="/favorites" element={<Favorites name={name} />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<ShoppingCart name={name} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
// SuperHero API access Token - 789126096124972
//background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgb(1, 1, 25) 35%, rgb(1, 19, 22) 100%);
