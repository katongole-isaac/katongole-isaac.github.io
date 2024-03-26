import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import SkillIcon from "./skillIcon";
import { FaNodeJs, FaReact, FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export default function Projects() {
  return (
    <div>
      <div className="border shadow-lg min-h-96 p-2 py-4 px-3">
        {/* heading */}
        <div className="mb-2 py-2">
          <h1 className="font-semibold"> Projects</h1>
        </div>

        {/* listing of projects */}
        <div className="flex flex-col gap-2">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

const Project = () => {
  return (
    <div className="border rounded-sm max-h-28 h-28 flex gap-2 items-center border-slate-100 ">
      <div className="w-1/3 h-full bg-slate-500"></div>

      {/* project descript */}
      <div className="flex-1 self-start  flex flex-col gap-1 ">
        <h1 className="group hover:underline decoration-gray-500 hover:cursor-pointer font-medium flex items-center gap-2 hover:[]">
          <span className="text-gray-800">My First Project </span>
          <FaExternalLinkAlt className=" text-gray-400" />
        </h1>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam Lorem
          ipsum dolor sit amet.
        </p>
        <div className="my-1 flex gap-3">
          <SkillIcon icon={MdOutlineDiamond} color="gray" />
          <div className="flex gap-2">
            <SkillIcon
              icon={FaNodeJs}
              title="Nodejs"
              className="bg-white text-green-700 cursor-pointer"
            />
            <SkillIcon
              icon={FaReact}
              title="ReactJS"
              className="text-cyan-500 cursor-pointer"
            />
            <SkillIcon
              icon={IoLogoJavascript}
              title="Javascript"
              className="text-yellow-600 bg-white"
            />
            <SkillIcon
              icon={SiTypescript}
              title="Typescript"
              className="text-blue-500 cursor-pointer bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
