import { useForm } from "react-hook-form";
import store from "../store";
import { apiCall } from "../apiCall";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { setId, setName, setToken, setUser } from "../localStorageFunction";
export const Login = () => {
  const navigate = useNavigate();
  const [userArray, setUserArray] = useState([]);
  const [isRegister, setIsRegister] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios
      .get("https://bookstore-b-end-bykks.onrender.com/user")
      .then((Response) => setUserArray(Response.data));
  }, []);
  const nameWatch = watch("name");
  const emailWatch = watch("email");
  const passwordWatch = watch("password");

  const submit = async (val) => {
    console.log(nameWatch, emailWatch, passwordWatch);

    console.log(userArray);
    if (isRegister) {
      const userObj = {
        name: nameWatch,
        email: emailWatch,
        password: passwordWatch,
      };
      for (let i = 0; i < userArray.length; i++) {
        let name = userArray[i].name;
        let email = userArray[i].email;
        console.log(name, email);
        if (email === emailWatch || name === nameWatch) {
          alert(
            "This user or email has already existed.Please user another email"
          );
          return;
        }
      }

      let resp = await apiCall(
        "https://bookstore-b-end-bykks.onrender.com/user",
        "post",
        userObj
      );
      setUser(emailWatch);
      setName(nameWatch);
      setToken(passwordWatch);
      console.log(resp.data.id, "is id");
      setId(resp.data.id);
      navigate("/");
    } else {
      for (let i = 0; i < userArray.length; i++) {
        let name = userArray[i].name;
        let email = userArray[i].email;
        let password = userArray[i].password;
        let id = userArray[i].id;
        if (
          name === nameWatch &&
          email === emailWatch &&
          password === passwordWatch
        ) {
          navigate("/");
          setUser(emailWatch);
          setName(nameWatch);
          setToken(passwordWatch);
          setId(id);
        }
      }
    }
  };
  return (
    <div className="loginBody">
      <div className="login">
        <img
          src="https://img.freepik.com/free-vector/ecommerce-online-shopping-isometric-design-poster_1284-15291.jpg?size=626&ext=jpg&ga=GA1.1.591895098.1687192658&semt=ais"
          className="loginImg"
        />
        <div className="loginContainer">
          <div className="header">LIN</div>
          <div className="greeting">Welcome to LIN Online Book store</div>
          <form className="loginbar" onSubmit={handleSubmit(submit)}>
            <input
              placeholder="Name"
              {...register("name", { required: true })}
            ></input>
            {errors.name && <div className="error">Please type Your name.</div>}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            ></input>
            {errors.email && (
              <div className="error">Please fill Your email.</div>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            ></input>
            {errors.password && (
              <div className="error">Please fill Password</div>
            )}
            <button className="loginBtn">
              {isRegister ? "Register" : "Log In"}
            </button>
            <div
              className="condition"
              onClick={() => {
                setIsRegister(!isRegister);
              }}
            >
              {isRegister ? "Already have an Account?..,Log In" : "Register"}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
/*  {...register(email, { required: true })}*/
// background-color: rgb(94, 238, 190)
