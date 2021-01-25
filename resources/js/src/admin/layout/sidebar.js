import React from "react";

import Menu from "./menu";
import { Apps } from "./common";
import Nav from "../../components/nav";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import NavbarBrand from "../../components/navbar-brand";
import NavbarToggle from "../../components/navbar-toggle";

const Sidebar = () => {
  return (
    <Navbar bg="dark" orientation="vertical" width="lg">
      <Container fluid>
        <NavbarToggle />

        <NavbarBrand src="/img/tabler.svg" />

        <Nav direction="row" className="flex-row d-lg-none">
          <Apps />
        </Nav>

        <Menu />
      </Container>
    </Navbar>
  );
};

export default Sidebar;
