import React from "react";

function LocationCard(props) {
  return (
    <div className="flex gap-6 items-start border-1 border-gray-200 shadow-lg shadow-gray-200 rounded-3xl p-8 hover:border-gray-400 hover:scale-105 hover:duration-500 transition-all hover:ease-in-out cursor-pointer">
      <img className="w-10" src="images/icons/location-icon.svg" />
      <div>
        <p className="text-2xl font-semibold">{props.city}</p>
        <p className="mt-2 text-base font-light">{props.address}</p>
      </div>
    </div>
  );
}

export default LocationCard;
