import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">Optimization</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Main</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/posts">Posts</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
