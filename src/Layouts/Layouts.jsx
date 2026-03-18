import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import Loader from "../components/Loader/Loader";
import toast from "react-hot-toast";

const Layouts = () => {
  // InstalledAppState
  const [installedApps, setInstalledApps] = useState([]);

  // HandleInstallFunction
  const handleInstall = (app) => {
    if (!installedApps.find((item) => item.id === app.id)) {
      setInstalledApps([...installedApps, app]);

      // ShowToast
      toast.success(`${app.title} Installed Successfully!`);
    }
  };

  const navigation = useNavigation();
  return (
    <>
      {/* Header */}
      <Header />

      <main>
        {/* Main */}
        {navigation.state === "loading" ? (
          <Loader />
        ) : (
          <Outlet context={{ handleInstall, installedApps }} />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layouts;
