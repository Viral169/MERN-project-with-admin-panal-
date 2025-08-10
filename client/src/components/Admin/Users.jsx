import {useState} from "react";
import {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import {useAuth} from "../context/Context";

const Users = () => {
  const {token} = useAuth();
  const [users, setusers] = useState([]);
  const userData = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      setusers(data.userData);
    } else {
      console.log("Userdata is not fetch");
    }
  };
  const deleteUser = async (userId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/delete/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        // setusers((prevUsers) =>
        //   prevUsers.filter((user) => user._id !== userId)
        // );
        userData();
      } else {
        console.error("Delete failed", data.message);
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <div>
      <h2 className="admin-h2">Users List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <NavLink
                  to={`/admin/users/${user._id}/edit`}
                  className="btn update-btn"
                >
                  Update
                </NavLink>
                <button
                  className="btn delete-btn"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
