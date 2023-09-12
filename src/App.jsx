import "./App.css";
import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Catalog from "./Pages/Catalog";
import CreateMascota from "./Pages/Mascotas/create";
import EditMascota from "./Pages/Mascotas/edit";
import MascotaFormEdit from "./Components/MascotaFormEdit";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = () => {
      setToken(localStorage.getItem("token"));
    }
    getToken();
  }, [])

  const manageToken = () => {
    (token) ? localStorage.clear() : localStorage.setItem("token", "usuario1");
  }

  return (
    <>
     <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      {!token ? (
                         <NavItem>
                         <NavLink href="/" onClick={() => manageToken()}>Login</NavLink>
                     </NavItem>
                      ) : (
                        <NavItem>
                        <NavLink href="/" onClick={() => manageToken()}>Logout</NavLink>
                    </NavItem>
                      )}
                    </Nav>
                </Collapse>
            </Navbar>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/mascotas/create" element={<CreateMascota />} />
        <Route path="/mascotas/editar" element={<EditMascota />}>
          <Route
            path="/mascotas/editar/:mascotaId"
            element={<MascotaFormEdit />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
