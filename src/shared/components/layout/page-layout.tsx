import React, { type PropsWithChildren } from 'react';
import { Navbar, Sidebar } from '../partials';

const PageLayout = (props: PropsWithChildren) => {
  return (
    <div className="lg:grid lg:grid-cols-page-layout">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden lg:col-start-2 lg:col-end-3">
        <Navbar />

        <main className="container">{props.children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
