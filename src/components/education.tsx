import React from "react";

import MakerereLogo from "../assets/images/makerere_logo.jpeg";

export default function Education() {
  return (
    <div className="shadow-md border py-4 px-3 bg-white">
      <div className="mb-2">
        <p className="font-semibold"> Education </p>
      </div>

      <div>
        <div className="flex gap-2">
          <div className="w-14">
            <img src={MakerereLogo} alt="Makerere_Univerity_log" />
          </div>
          <div className="flex-1">
            <p className="font-normal">Makerere University</p>
            <p className="text-sm text-gray-600">
              Bachelor's degree, Computer Science
            </p>
            <p className="text-gray-600 text-sm  mt-1 ">Aug 2018 - Nov 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
