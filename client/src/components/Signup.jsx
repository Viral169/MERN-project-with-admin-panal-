import {useState} from "react";
import "./signup.css";
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {FaEye, FaEyeSlash} from "react-icons/fa"; // 👈 Eye icons

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // 👈 NEW STATE

  const navigate = useNavigate();

  const handleInput = (e) => {
    const {name, value} = e.target;
    setUser((prev) => ({...prev, [name]: value}));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      navigate("/");
    } else {
      alert(data.message);
      // toast.error(data.message);
    }
  };

  const handleNotifacation = () => {
    if (!navigator.onLine) {
      toast.error("You're Offline");
    }
  };

  return (
    <div className="register">
      <div className="form-container">
        <h1>Register Form</h1>
        <form onSubmit={handleForm} className="register-form">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInput}
          />

          <label>Phonenumber</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleInput}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />

          <label>Password</label>
          <div style={{display: "flex", alignItems: "center"}}>
            <input
              type={showPassword ? "text" : "password"} // 👈 TOGGLE TYPE
              name="password"
              value={user.password}
              onChange={handleInput}
              style={{flex: 1}}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)} // 👈 TOGGLE STATE
              style={{
                fontSize: "1.5rem",
                marginBottom: "20px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button type="submit" onClick={handleNotifacation}>
            Signup
          </button>
        </form>

        <div>
          <h3>
            Already Have An Account ? <NavLink to="/login">Login</NavLink>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
