import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import SkillIcon from "./skillIcon";
import { FaExternalLinkAlt } from "react-icons/fa";

import { projectData } from "../data/projectData";

export interface ProjectData {
  projectImg: React.ReactNode | (() => React.ReactNode);
  projectName: string;
  projectAlt: string;
  projectURL: string;
  skills: React.ReactNode[] | (() => React.ReactNode)[];
}

export default function Projects() {
  return (
    <div>
      <div className="shadow-lg min-h-96 p-2 py-4 px-3 bg-white">
        {/* heading */}
        <div className="mb-2 py-2">
          <h1 className="font-semibold"> Projects</h1>
        </div>

        {/* listing of projects */}
        <div className="flex flex-col gap-2">
          {projectData.map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Project: React.FC<ProjectData> = ({
  projectAlt,
  projectImg,
  projectName,
  projectURL,
  skills,
}) => {
  return (
    <div className=" rounded-sm max-h-max h-max flex gap-2 items-center ">
      <div className="w-1/3 h-28 max-h-max rounded-lg overflow-hidden flex">
        {typeof projectImg === "function" ? projectImg() : projectImg}
      </div>

      {/* project descript */}
      <div className="flex-1 self-start  flex flex-col gap-1 ">
        <a href={projectURL} target="_blank">
          <h1 className="group hover:underline decoration-gray-500 hover:cursor-pointer font-medium flex items-center gap-2 hover:[]">
            <span className="text-gray-800"> {projectName} </span>
            <FaExternalLinkAlt className=" text-gray-400 group-hover:text-blue-400" />
          </h1>
        </a>

        <div className="min-h-max my-1">
          <p className="text-xs text-gray-500">{projectAlt}</p>
        </div>

        <div className="my-1 flex gap-3 items-start ">
          <SkillIcon icon={MdOutlineDiamond} color="gray" />

          <div className="flex gap-2 flex-wrap">
            {skills.map((skill, idx) => {
              if (typeof skill === "function")
                return <React.Fragment key={idx}>{skill()}</React.Fragment>;

              return <React.Fragment key={idx}>{skill}</React.Fragment>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
