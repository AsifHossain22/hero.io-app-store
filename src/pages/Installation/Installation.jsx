import React from "react";
import { useOutletContext } from "react-router";
import InstalledAppCard from "../../components/InstalledAppCard/InstalledAppCard";

const Installation = () => {
  const { installedApps, handleUninstall } = useOutletContext();
  //   console.log(installedApps, handleUninstall);
  return (
    <section className="py-10 lg:py-20 mx-4 lg:mx-0">
      <div className="max-w-7xl mx-auto">
        {/* SectionTitle */}
        <div className="text-center">
          <h2 className="text-[#001931] text-3xl md:text-5xl font-bold pb-4">
            Your Installed Apps
          </h2>

          {/* Description */}
          <p className="text-[#627382] md:text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* TotalAppsAndSearchField */}
        <div className="flex justify-between items-center mt-10 mb-5">
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
              <option disabled={true}>Sort by</option>
              <option>Name</option>
              <option>Size</option>
            </select>
          </div>
        </div>

        {/* InstalledAppsContainer */}
        <div className="pb-5 lg:pb-10 space-y-4">
          {installedApps.map((installedApp) => (
            <InstalledAppCard
              key={installedApp.id}
              installedApp={installedApp}
              handleUninstall={handleUninstall}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installation;
