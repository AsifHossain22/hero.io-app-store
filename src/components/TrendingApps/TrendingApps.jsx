import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import appImage from "../../assets/demo-app (1).webp";

const TrendingApps = () => {
  return (
    <section className="py-10 lg:py-20 mx-4 lg:mx-0">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <div className="text-center">
          {/* Title */}
          <h2 className="text-[#001931] text-3xl md:text-5xl font-bold pb-4">
            Trending Apps
          </h2>

          {/* Description */}
          <p className="text-[#627382] md:text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* AppsContainer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 lg:py-10">
          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>

          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>
          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>
          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>
          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>
          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>
          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>
          {/* AppCard */}
          <div className="bg-base-100 p-4 rounded-sm">
            {/* Image */}
            <div>
              <img
                src={appImage}
                alt="App Image"
                className="w-full rounded-lg"
              />
            </div>

            {/* AppTitle */}
            <h3 className="text-xl text-[#001931] font-medium py-4">
              App Tile
            </h3>

            {/* Details */}
            <div className="flex justify-between items-center">
              <span className="badge badge-soft badge-success rounded-sm">
                <FaDownload /> 9M
              </span>
              <span className="badge badge-soft badge-warning rounded-sm">
                <FaStar /> 5
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-sm text-base-100 font-semibold cursor-pointer hover:opacity-90 transition-all duration-300">
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
