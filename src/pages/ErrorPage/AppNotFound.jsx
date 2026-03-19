import React from "react";
import errorAppPageImage from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4">
      <div>
        <img src={errorAppPageImage} alt="Error Page Image" />
      </div>
      <p className="text-2xl lg:text-3xl font-bold text-[#001931] mt-4 mb-2">
        Oops, apps not found!
      </p>
    </section>
  );
};

export default AppNotFound;
