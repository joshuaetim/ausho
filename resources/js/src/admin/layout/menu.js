import React from "react";

import Nav from "../../components/nav";
import NavLink from "../../components/nav-link";
import NavItem from "../../components/nav-item";
import NavbarCollapse from "../../components/navbar-collapse";

const Menu = () => {
  return (
    <NavbarCollapse>
      <Nav className="pt-lg-3">
        <NavItem>
          {/* <NavLink title="About" icon={<Icon />}>
            Home
          </NavLink> */}
          <NavLink title="Dashboard" to="/dashboard" />
        </NavItem>
      </Nav>
    </NavbarCollapse>
  );
};

export default Menu;
