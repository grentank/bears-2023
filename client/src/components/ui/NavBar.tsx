import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import useUserContext from '../../contexts/user/hooks';

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => setIsOpen(!isOpen);

  const { user, logoutHandler } = useUserContext();

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">
          {user.status === 'logged' ? `Hello, ${user.name}` : 'Guest'}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Main
              </NavLink>
            </NavItem>
            {user.status === 'logged' && (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/posts">
                    Posts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button onClick={logoutHandler}>Logout</Button>
                </NavItem>
              </>
            )}
            {user.status === 'guest' && (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
