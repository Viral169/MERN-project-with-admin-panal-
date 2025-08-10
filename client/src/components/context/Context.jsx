import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [service, setService] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const setLocalStorage = (setTokenvalue) => {
    setToken(setTokenvalue);
    localStorage.setItem("token", setTokenvalue);
  };

  const setLoginUser = (userData) => {
    setUser(userData); // ✅ This is called right after login
  };
  const LogOutuser = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  const islogin = !!token;

  const serviceData = async () => {
    try {
      const res = await fetch(" http://127.0.0.1:3000/api/services/service", {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        setService(data.serviceData);
      }
    } catch (error) {
      console.log("Service Error is ", error);
    }
  };

  // JWT AUTHENTICATION - to get the currently loggedIN user data

  const userAuthentication = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/v1/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.validUser);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const validataRoute = async () => {
  //   try {
  //     if (token) {
  //       const res = await fetch("http://127.0.0.1:3000/api/v1/user");
  //       const data = await res.json();
  //       console.log(data)
  //       setRes(data);
  //     }
  //   } catch (error) {
  //     console.log("route Error is ", error);
  //   }
  // };

  useEffect(() => {
    serviceData();
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        setLocalStorage,
        islogin,
        LogOutuser,
        user,
        service,
        token,
        isLoading,
        setLoginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextvalue = useContext(AuthContext);
  if (!authContextvalue) {
    throw new Error("Useauth used outside of the Provider");
  }
  return authContextvalue;
};
