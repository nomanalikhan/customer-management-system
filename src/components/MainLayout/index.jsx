import React from "react";
import Header from "../Header";

/**
 * Class to maintain the header and footer for every route.
 * @param  {*} children      takes anything as children
 * @returns  {HTMLElement}  layout wrapper component
 * @class
 */
const MainLayout = ({ children }) => (
  <main>
    <Header />
    <section>{children}</section>
  </main>
);

export default MainLayout;
