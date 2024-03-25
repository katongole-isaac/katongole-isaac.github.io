import ImageIcon from "../components/common/imageIcon";
import { IExperience } from "../components/experience";
import MakLogo from "../assets/images/makerere_logo.jpeg";
import { SiUpwork } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import SkillIcon from "../components/skillIcon";

const workExperienceData: IExperience[] = [
  {
    company: {
      duration: "Full time",
      location: "Kampala, Central UG",
      name: "Comany",
    },
    job: { title: "Frontend Developer", type: "Remote" },
    duration: {
      endDate: "Jun 2034",
      startDate: "Jan 2021",
      totalTime: "3 mons",
    },
    description: [
      <p>
        - Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Impedit,elit. Impedit, quod? quod?
      </p>,
      <p>
        - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
        quod?
      </p>,
      <p>
        - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
        quod?
      </p>,
      <p>
        - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
        quod?
      </p>,
    ],

    skills: [
      <SkillIcon
        icon={FaNodeJs}
        title="Nodejs"
        className="bg-white text-green-700 cursor-pointer"
      />,
      <SkillIcon
        icon={FaReact}
        title="ReactJS"
        className="text-cyan-500 cursor-pointer"
      />,
      <SkillIcon
        icon={IoLogoJavascript}
        title="Javascript"
        className="text-yellow-600 bg-white"
      />,
      <SkillIcon
        icon={SiTypescript}
        title="Typescript"
        className="text-blue-500 cursor-pointer bg-white"
      />,
    ],
    companyIcon: <ImageIcon src={MakLogo} alt="Mak_logo" />,
  },
];

export default workExperienceData;
