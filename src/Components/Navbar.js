import React from "react";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
import { useOktaAuth } from "@okta/okta-react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
function NavbarComponent() {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <p>Loading....</p>;
  }

  const handleLogout = async () => oktaAuth.signOut();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Resource Share
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex me-auto my-2 my-lg-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>

              <NavDropdown title="Listings" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/post">
                  Create a new listing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/explore">
                  View listings
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              {!authState.isAuthenticated ? (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) : (
                <Button onClick={handleLogout} variant="outline-success">
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;


// {
//   !authState.isAuthenticated ? (
//     <li>
//       <Link to="/login">Login</Link>
//     </li>
//   ) : (
//     <li>
//       <Button variant="success" onClick={handleLogout}>
//         Logout
//       </Button>
//     </li>
//   );
// }