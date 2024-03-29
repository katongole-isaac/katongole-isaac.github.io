import { useCallback, useEffect, useState } from "react";
import { HiOutlineStatusOnline, HiBadgeCheck } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import moment from "moment-timezone";

import Avatar from "./common/avatar";
import SkillIcon from "./skillIcon";
import formatCurrency from "../utils/formatCurrency";
import { RATE_PER_HOUR } from "../data/mydata";
import TextArt from "./common/textArt";

export default function ProfileOverview() {
  const currency = formatCurrency(RATE_PER_HOUR);

  const getCurrentTimeInUganda = useCallback(
    () => moment().tz("Africa/Kampala").format("hh:mm A z Z "),
    []
  );

  const [time, setTime] = useState(getCurrentTimeInUganda());

  useEffect(() => {
    const _id = setInterval(() => setTime(getCurrentTimeInUganda()), 1000);
    return () => clearInterval(_id);
  }, []);

  return (
    <div className="relative max-h-[28rem] h-[28rem] flex flex-col boorder  border-pink-500">
      <div className=" basis-48 max-h-[12rem]">
        <TextArt />
      </div>
      <div className="absolute top-[5.5rem] mx-2 bg-zinc-100 rounded-full">
        <Avatar size="w-44" />
      </div>

      <div className="flex-1 bg-slate-50">
        <div className="h-20 "></div>

        {/* Profile details */}
        <div className="px-2">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-medium">Katongole Isaac</h1>
                <SkillIcon icon={HiBadgeCheck} color="#0d6efd" size="30px" />
              </div>
              <p className="font-bold">{currency}/hr</p>
            </div>

            <p>Frontend Developer - Reactjs | Nextjs | Typescript </p>
          </div>

          {/* Location */}
          <div className="text-xs my-2 flex gap-2 font-medium text-gray-500">
            <p>Kampala, Central Division, Uganda</p>
            <p> - </p>
            <p>{time} </p>
          </div>

          {/* Availiability Badge */}
          <div className="my-3">
            <AvailiabilityBadge />
          </div>

          {/* Contact link */}
          <div className="my-4 ">
            <div className="flex gap-2">
              <a href="https://github.com/katongole-isaac" target="_blank">
                <SkillIcon icon={FaGithub} title="Github" />
              </a>
              <a href="https://twitter.com/1katongoleisaac" target="_blank">
                <SkillIcon icon={FaXTwitter} color="black" title="Twitter" />
              </a>
              <a href="https://dev.to/katongole_isaac" target="_blank">
                <SkillIcon icon={FaDev} color="black" title="Dev.to" />
              </a>
              <a
                href="https://www.linkedin.com/in/katongole-isaac/"
                target="_blank"
              >
                <SkillIcon
                  icon={FaLinkedin}
                  className="text-[#0d6efd]"
                  title="LinkedIn"
                />
              </a>{" "}
              <a
                href="https://www.upwork.com/freelancers/~01ebfe65423c192588"
                target="_blank"
              >
                <SkillIcon icon={SiUpwork} color="green" title="Upwork" />
              </a>
              <a href="mailto:katongolelsaac78@gmail.com">
                <SkillIcon
                  icon={MdMail}
                  className=" bg-clip-text  text-pink-950 bg-gradient-to-r from-pink-500 to-violet-500"
                  title="GMail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AvailiabilityBadge = () => {
  return (
    <div className="flex gap-1 rounded-lg px-2 border w-max border-[#0d6efd]">
      <div>
        <HiOutlineStatusOnline color="#0d6efd" />
      </div>
      <div className="text-xs">
        <p className="text-[#0d6efd] font-medium"> Available now</p>
      </div>
    </div>
  );
};
