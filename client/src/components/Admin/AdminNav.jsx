import {NavLink, Outlet} from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <div className="admin-container">
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/home">
                <ion-icon name="home"></ion-icon>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/users">
                <ion-icon name="person"></ion-icon>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/contact">
                <ion-icon name="chatbubbles"></ion-icon>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/services">
                <ion-icon name="construct"></ion-icon>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout">
                <ion-icon name="person-circle"></ion-icon>
                logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default AdminNav;
