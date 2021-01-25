import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Page from "../../components/page";
import Content from "../../components/content";
import Container from "../../components/container";

const Layout = ({ children }) => {
  return (
    <Page>
      <Sidebar />
      <Header />
      <Content>
        <Container>{children}</Container>
      </Content>
    </Page>
  );
};

export default Layout;
