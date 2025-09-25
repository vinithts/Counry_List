import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { IoIosMenu } from "react-icons/io";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="custom-navbar">
      <div className="fluid container-md">
        <Navbar.Brand className="country-heading">Countries</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        //   className="custom-toggler"
        >
          <IoIosMenu style={{ color: "#3E3E3E", width:"24px", height: "24px" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={location.pathname} className="ms-auto custom-nav">
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/home/all-countries"}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home/all-countries");
                }}
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/home/asia-countries"}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home/asia-countries");
                }}
              >
                Asia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/home/europe-countries"}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home/europe-countries");
                }}
              >
                Europe
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
