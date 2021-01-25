import React from "react";

import { Apps } from "./common";
import Nav from "../../components/nav";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import NavbarToggler from "../../components/navbar-toggle";
import NavbarCollapse from "../../components/navbar-collapse";

const Header = () => {
  return (
    <Navbar width="md" bg="light" className="d-none d-lg-flex d-print-none">
      <Container fluid="xl">
        <NavbarToggler />
        <Nav className="flex-row order-md-last">
          <Apps color="dark" />
        </Nav>

        <NavbarCollapse>
          {/* <div>
            <form action="." method="get">
              <div className="input-icon">
                <span className="input-icon-addon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search…"
                  aria-label="Search in website"
                />
              </div>
            </form>
          </div> */}
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
