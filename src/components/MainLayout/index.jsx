import React from 'react';
import Header from '../Header';

const MainLayout = ({ children }) => (
  <main>
    <Header />
    <section>{children}</section>
  </main>
);

export default MainLayout;
