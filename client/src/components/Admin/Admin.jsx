import {Navigate} from "react-router-dom";
import {useAuth} from "../context/Context";
import AdminNav from "./AdminNav";

const Admin = () => {
  const {user, isLoading} = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1 className="admin-h1">Welcome To Admin Page</h1>
      <AdminNav />
    </>
  );
};

export default Admin;
