import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const Layouts = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <main>
        {/* Main */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layouts;
