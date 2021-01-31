import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Page from "../../components/page";
import Content from "../../components/content";

const Layout = ({ children }) => {
  return (
    <Page>
      <Sidebar />
      <Header />
      <Content>{children}</Content>
    </Page>
  );
};

export default Layout;
