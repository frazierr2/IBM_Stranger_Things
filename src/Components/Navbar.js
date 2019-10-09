import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Inspiration</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/gallery" eventKey="link-1">
          Gallery
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/episodes" eventKey="link-2">
          Episodes
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
