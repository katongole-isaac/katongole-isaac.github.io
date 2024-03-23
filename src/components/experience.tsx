import React from "react";
import { MdOutlineDiamond } from "react-icons/md";
import MakLogo from "../assets/images/makerere_logo.jpeg";
import { SiUpwork } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import ImageIcon from "./common/imageIcon";

export default function Experience() {
  return (
    <div>
      <div className="flex gap-3">
        {/* company logo */}
        <div>
          <ImageIcon src={MakLogo} alt="Mak_logo" />
        </div>

        {/* section - work description  */}
        <div className="">
          {/* title */}
          <div className="mb-1">
            <p className="font-medium">Web Developer</p>
          </div>

          {/* company and duration */}
          <div className="flex  text-xs items-center gap-1 mb-1">
            <span>Stratcom Inc</span>
            <Dot />
            <span>Full time</span>
          </div>

          {/* work time */}

          <div className="mb-1">
            <div className="text-xs text-gray-500 flex gap-1 items-center">
              <span>Jun 2023</span>
              <span>-</span>
              <span>Aug 2023</span>
              <Dot />
              <span>3 months</span>
            </div>
          </div>

          {/* location */}
          <div>
            <div className="text-xs text-gray-500 flex gap-1 items-center">
              <span>Boca Raton, Florida, United States</span>
              <Dot />
              <span>Remote</span>
            </div>
          </div>

          {/* Description  */}
          <div className="text-sm text-zinc-800 my-4">
            <p>
              - Restructured, minified, and bundled Geojson data which enabled
              seamless integration
            </p>
            <p>
              - Data visualization - Populated radio stations and Geojson data
              on a map-based UI using
            </p>
            <p>
              - Keplergl. - Optimized supabase queries which lead to 5%
              performance improvement
            </p>
          </div>

          {/* Skill */}

          <div>
            <div className="flex gap-3 items-center">
              <MdOutlineDiamond color="gray" />

              <div className="flex items-center gap-2">
                <SiTypescript
                  title="Typescript"
                  className="text-blue-500 cursor-pointer bg-white"
                />
                <FaNodeJs
                  title="Nodejs"
                  className="bg-white text-green-700 cursor-pointer"
                />
                <FaReact
                  title="ReactJS"
                  className="text-cyan-500 cursor-pointer"
                />
                <IoLogoJavascript className="text-yellow-600 bg-white" />
              </div>
              {/* <p className="text-sm font-medium">Nodejs, Reactjs and Nextjs</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Dot = () => <span className="w-[3px] h-[3px] rounded bg-gray-500"></span>;
