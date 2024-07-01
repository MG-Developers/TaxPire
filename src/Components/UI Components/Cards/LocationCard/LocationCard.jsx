import React from "react";

function LocationCard(props) {
  return (
    <div className="flex gap-6 items-start border-1 border-gray-200 shadow-lg shadow-gray-200 rounded-3xl xl:p-8 lg:p-6 p-4 hover:border-gray-400 hover:scale-105 hover:duration-500 transition-all hover:ease-in-out cursor-pointer">
      <img className="xl:w-10 w-8" src="images/icons/location-icon.svg" />
      <div>
        <p className="xl:text-2xl text-xl font-semibold">{props.city}</p>
        <p className="mt-2 xl:text-base text-sm font-light">{props.address}</p>
      </div>
    </div>
  );
}

export default LocationCard;
