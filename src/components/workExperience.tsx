import Experience from "./experience";
import workExperienceData from "../data/workExperienceData";

export default function WorkExperience() {
  return (
    <div className="shadow-lg py-6 px-4 bg-white">
      <div className="my-2 mb-3">
        <p className="font-semibold text-xl">Experience</p>
      </div>
      <div className=" space-y-6 ">
        {workExperienceData.map((exp, idx) => (
          <Experience key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}
