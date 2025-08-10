import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useAuth} from "../context/Context";
const Contact = () => {
  const {token} = useAuth();
  const [contacts, setContact] = useState([]);

  const contactData = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/admin/contacts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setContact(data.contact);
  };
  const deleteUsercontact = async (userId) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:3000/api/admin/contacts/${userId}`,
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
        setContact((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      } else {
        console.error("Delete failed", data.message);
      }
    } catch (error) {
      console.error("Error deleting Contact", error);
    }
  };

  useEffect(() => {
    contactData();
  }, []);

  return (
    <div>
      <h2 className="admin-h2">Contact Messages</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((curContact, index) => (
            <tr key={index}>
              <td>{curContact.username}</td>
              <td>{curContact.email}</td>
              <td>{curContact.message}</td>
              <td>
                <button
                  className="btn delete-btn"
                  onClick={() => {
                    deleteUsercontact(curContact._id);
                  }}
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

export default Contact;
