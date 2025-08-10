import {useEffect, useState} from "react";
import {useAuth} from "../context/Context";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

const Updatauser = () => {
  const {token} = useAuth();
  const params = useParams();
  const [user, setUsers] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const getSingleuser = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/api/admin/getuser/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setUsers(data.getSigleuser);
    } catch (error) {
      console.log("Update error is", error);
    }
  };

  const handleInput = (e) => {
    const {name, value} = e.target;
    setUsers({...user, [name]: value});
  };
  const handleupdateForm = async (e) => {
    e.preventDefault();
    try {
      const updateresponse = await fetch(
        `http://127.0.0.1:3000/api/admin/getuser/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(user),
        }
      );
      if (updateresponse.ok) {
        const data = await updateresponse.json();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getSingleuser();
    // handleupdateForm();
  }, []);
  return (
    <>
      <div className="register">
        <div className="form-container">
          <h1>Update User Data</h1>
          <form onSubmit={handleupdateForm} className="register-form">
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

            <button type="submit " className="btn update-btn">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Updatauser;
