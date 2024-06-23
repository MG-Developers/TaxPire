import React from "react";

function ClientCard() {
  return (
    <div className="flex flex-col p-10 bg-white border-1 border-tp-light-gray shadow rounded-3xl max-w-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center p-4">
          <img
            className="rounded-full w-20 mr-4"
            src="images/dummy-avatar.jpg"
          />
          <div>
            <p className="text-xl font-semibold">David Michael</p>
            <p className="text-lg text-tp-blue">Manager</p>
          </div>
        </div>

        <div>
          <img src="images/dummy-logo.svg" />
        </div>
      </div>

      <div className="p-4 border-y-1 border-gray-200">
        <p className="text-tp-gray font-light text-lg">
          We'd want to convey our gratitude for the job you've done for us
          throughout the years. You have managed our financial attention to
          detail.
        </p>
      </div>

      <div className="flex items-center p-4">
        <img className="w-8 mr-1" src="images/star.svg" />
        <img className="w-8 mr-1" src="images/star.svg" />
        <img className="w-8 mr-1" src="images/star.svg" />
        <img className="w-8 mr-1" src="images/star.svg" />
        <img className="w-8 mr-1" src="images/star.svg" />
      </div>
    </div>
  );
}

export default ClientCard;
