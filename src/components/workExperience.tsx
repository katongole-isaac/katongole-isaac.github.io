import React from "react";
import Experience from "./experience";

export default function WorkExperience() {
  return (
    <div className="shadow-lg py-4 px-4">
      <div className="my-2">
        <p className="font-semibold text-xl">Experience</p>
      </div>
      <div className=" space-y-3">
        {Array(3)
          .fill(null)
          .map((a, idx) => (
            <Experience key={idx} />
          ))}
      </div>
    </div>
  );
}
