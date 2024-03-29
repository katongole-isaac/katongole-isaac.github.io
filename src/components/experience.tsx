import React, { ReactNode } from "react";
import { MdOutlineDiamond } from "react-icons/md";

import SkillIcon from "./skillIcon";

type DurationType = "Full time" | "Part time";

interface Props {
  companyIcon: React.ReactNode;
  job: { title: string; type: "Remote" | "Freelance" | "On-site" };
  company: { name: string; duration: DurationType; location: string };
  duration: { startDate: string; endDate: string; totalTime: string };
  description: React.ReactNode[] | (() => ReactNode)[];
  skills: React.ReactNode[];
}

export interface IExperience extends Props {}

export default function Experience({
  job,
  company,
  duration,
  description,
  companyIcon,
  skills,
}: Props) {
  return (
    <div>
      <div className="flex gap-3">
        {/* company logo */}
        <div>{companyIcon}</div>

        {/* section - work description  */}
        <div className="">
          {/* title */}
          <div className="mb-1">
            <p className="font-medium">{job.title}</p>
          </div>

          {/* company and duration */}
          <div className="flex  text-xs items-center gap-1 mb-1">
            <span>{company.name} </span>
            <Dot />
            <span>{company.duration} </span>
          </div>

          {/* work time */}

          <div className="mb-1">
            <div className="text-xs text-gray-500 flex gap-1 items-center">
              <span>{duration.startDate} </span>
              <span>-</span>
              <span>{duration.endDate}</span>
              <Dot />
              <span>{duration.totalTime}</span>
            </div>
          </div>

          {/* location */}
          <div>
            <div className="text-xs text-gray-500 flex gap-1 items-center">
              <span>{company.location}</span>
              <Dot />
              <span>{job.type}</span>
            </div>
          </div>

          {/* Description  */}
          <div className="text-sm text-zinc-800 my-4">
            {description.map((desc, idx) => {
              if (typeof desc === "function")
                return <React.Fragment key={idx}>{desc()}</React.Fragment>;

              return <React.Fragment key={idx}>{desc}</React.Fragment>;
            })}
          </div>

          {/* Skill */}

          <div>
            <div className="flex gap-3 items-center">
              <SkillIcon icon={MdOutlineDiamond} color="gray" />
              <div className="flex items-center gap-2 flex-wrap">
                {skills.map((skill, idx) => (
                  <React.Fragment key={idx}>{skill}</React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Dot = () => <span className="w-[3px] h-[3px] rounded bg-gray-500"></span>;
