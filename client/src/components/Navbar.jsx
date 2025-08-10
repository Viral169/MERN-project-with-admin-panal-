import {useAuth} from "./context/Context";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  const {user, islogin} = useAuth();

  return (
    <>
      <nav>
        <div className="menu">
          <h1>
            <a href="/">MUSSARELA</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#menu">
                  <ion-icon name="menu"></ion-icon>
                  Menu
                </a>
              </li>
              <li>
                <a href="#sobre">
                  <ion-icon name="people-outline"></ion-icon>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contato">
                  <ion-icon name="chatbubbles-outline"></ion-icon>
                  Contacts
                </a>
              </li>
              {islogin ? (
                <>
                  {user?.isAdmin ? (
                    <li>
                      <NavLink to={"/admin/home"}>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        Admin
                      </NavLink>
                    </li>
                  ) : (
                    <li>
                      <NavLink to={"/logout"}>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        logout
                      </NavLink>
                    </li>
                  )}
                </>
              ) : (
                <li>
                  <NavLink to={"/login"}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
