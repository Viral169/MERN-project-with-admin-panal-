import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "./context/Context";
import {toast} from "react-toastify";
import {FaEye, FaEyeSlash} from "react-icons/fa"; // 👈 Eye icons

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {setLoginUser, setLocalStorage} = useAuth();
  const [showPassword, setShowPassword] = useState(false); // 👈 NEW STATE

  const handleInput = (e) => {
    const {name, value} = e.target;
    setUser((prev) => ({...prev, [name]: value}));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      toast.success(data.message);
      setLoginUser(data.login);
      navigate("/");
      setLocalStorage(data.token);
    } else {
      alert(data?.message);
    }
  };

  const handleNotifacation = () => {
    if (!navigator.onLine) {
      toast.error("You're Offline");
    }
  };

  return (
    <>
      <div className="login">
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleForm} className="register-form">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
            <div style={{position: "relative", marginBottom: "20px"}}>
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"} // 👈 TOGGLE TYPE
                name="password"
                value={user.password}
                onChange={handleInput}
                style={{width: "92%", paddingRight: "20px"}} // space for icon
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)} // 👈 TOGGLE STATE
                style={{
                  fontSize: "1.5rem",
                  position: "absolute",
                  right: "0px",
                  top: "52%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <button type="submit" onClick={handleNotifacation}>
              Submit
            </button>

            <div>
              <h3>
                Don't Have An Account ? <NavLink to="/signup">Sign up</NavLink>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
