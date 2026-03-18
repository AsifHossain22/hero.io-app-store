import React from "react";
import { Link, useOutletContext } from "react-router";
import InstalledAppCard from "../../components/InstalledAppCard/InstalledAppCard";
import { MdInstallDesktop } from "react-icons/md";

const Installation = () => {
  const { installedApps, handleUninstall } = useOutletContext();
  //   console.log(installedApps, handleUninstall);
  return (
    <section className="py-10 lg:py-20 mx-4 lg:mx-0">
      <div className="max-w-7xl mx-auto">
        {/* TotalAppsAndSearchField */}
        {installedApps.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 mt-10 mb-5">
            {/* TotalApps */}
            <h5 className="text-2xl text-[#001931] font-semibold">
              ({installedApps.length}) Apps Installed
            </h5>

            {/* SortBySelectField */}
            <div>
              <select
                defaultValue="Pick a color"
                className="select appearance-none"
              >
                <option>Sort by</option>
                <option>Name</option>
                <option>Size</option>
              </select>
            </div>
          </div>
        )}

        {/* InstalledAppsContainer */}
        <div className="pb-5 lg:pb-10 space-y-4">
          {installedApps.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-20 text-center gap-4">
              <MdInstallDesktop className="text-7xl text-[#D2D2D2]" />
              <h3 className="text-2xl font-bold text-[#001931]">
                No Apps Installed Yet
              </h3>
              <p className="text-[#627382]">
                Browse our apps and install your favorites!
              </p>
              <Link
                to="/apps"
                className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 py-3 rounded-sm text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                Browse Apps
              </Link>
            </div>
          ) : (
            installedApps.map((installedApp) => (
              <InstalledAppCard
                key={installedApp.id}
                installedApp={installedApp}
                handleUninstall={handleUninstall}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Installation;
