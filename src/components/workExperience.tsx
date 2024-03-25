import React from "react";
import Experience from "./experience";
import workExperienceData from "../data/workExperienceData";

export default function WorkExperience() {
  return (
    <div className="shadow-lg py-4 px-4">
      <div className="my-2">
        <p className="font-semibold text-xl">Experience</p>
      </div>
      <div className=" space-y-3">
        {workExperienceData.map((exp, idx) => (
          <Experience key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}
