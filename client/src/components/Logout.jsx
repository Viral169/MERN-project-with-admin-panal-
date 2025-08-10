import {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "./context/Context";
const Logout = () => {
  const {LogOutuser} = useAuth();
  useEffect(() => {
    LogOutuser();
  }, [LogOutuser]);
  return <Navigate to="/login" />;
};

export default Logout;
