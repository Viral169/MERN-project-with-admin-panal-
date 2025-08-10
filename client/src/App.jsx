import "./App.css";
import Signup from "./components/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin/Admin";
import Users from "./components/Admin/Users";
import Contact from "./components/Admin/Contact";
import Services from "./components/Admin/Services";
import Updatauser from "./components/Admin/Updatauser";
import AdminHom from "./components/Admin/AdminHom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/adminhome" element={<AdminHom />} />
            <Route path="users" element={<Users />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="users/:id/edit" element={<Updatauser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
