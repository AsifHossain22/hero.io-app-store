import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/Loader/Loader";

const Layouts = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* Header */}
      <Header />

      <main>
        {/* Main */}
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layouts;
