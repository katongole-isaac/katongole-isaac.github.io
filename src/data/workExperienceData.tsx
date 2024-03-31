import ImageIcon from "../components/common/imageIcon";
import { IExperience } from "../components/experience";
import MakLogo from "../assets/images/makerere_logo.jpeg";
import PinniLogo from "../assets/images/pinnisoft_logo.jpg";
import UpworkLogo from "../assets/images/upwork_logo.jpeg";

import {
  BootStrapIcon,
  ChakraIcon,
  CssIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  NodejsIcon,
  ReactjsIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../components/icons";

import { FaBuildingColumns } from "react-icons/fa6";
import moment from "moment-timezone";

const getMonths = (startDate: string, endDate?: string) => {
  const _endDate = endDate ? moment(endDate, "YYYYMMDD") : moment();

  return _endDate.diff(moment(startDate, "YYYYMMDD"), "months");
};

const workExperienceData: IExperience[] = [
  {
    company: {
      duration: "Full time",
      location: "Mawanda Rd, Kamwokya,Kampala, Central UG",
      name: "PinniSoft",
    },
    job: { title: "Web Frontend Developer - React", type: "On-site" },
    duration: {
      endDate: "Present",
      startDate: "Nov 2023",
      totalTime: `${getMonths("2023111")} mons`,
    },
    description: [
      <p className="">- Developed and maintained web apps using React.js.</p>,
      <p>
        - Collaborated with cross-functional teams including designers, product
        managers, and developers to create high-quality products.
      </p>,
      <p>
        - Participated in code reviews, weekly meetings and provided
        constructive feedback.
      </p>,
      <p>- Integrated of third-party APIs as well as backend Restful APIs</p>,
    ],

    skills: [
      <NodejsIcon />,
      <ReactjsIcon />,
      <TypescriptIcon />,
      <ChakraIcon />,
      <GitIcon />,
    ],
    companyIcon: <ImageIcon src={PinniLogo} alt="Mak_logo" />,
  },
  {
    company: {
      duration: "Full time",
      location: "Boca Raton, US",
      name: "Upwork Client",
    },
    job: { title: "React Developer", type: "Remote" },
    duration: {
      startDate: "Aug 2023",
      endDate: "Sept 2023",
      totalTime: `${getMonths("20230801", "20230901")} mons`,
    },
    description: [
      <p className="">
        - Developed web map for data visualization about DMAs in US using
        Keplergl
      </p>,
      <p>- Converted datasets to geojson data for visualization.</p>,
      <p>
        - Participated and contributed in code reviews and online meetings.
      </p>,
      <p>- Used Clickup for team work and tracking task progress.</p>,
    ],

    skills: [
      <TypescriptIcon />,
      <ReactjsIcon />,
      <NodejsIcon />,
      <GitIcon />,
      <TailwindIcon />,
    ],
    companyIcon: <ImageIcon src={UpworkLogo} alt="Mak_logo" />,
  },
  {
    company: {
      duration: "Full time",
      location: "Kampala, Central UG",
      name: "Stratcom Telecom",
    },
    job: { title: "Frontend Developer", type: "On-site" },
    duration: {
      startDate: "Feb 2021",
      endDate: "OCt 2021",
      totalTime: `${getMonths("20210201", "20211001")} mons`,
    },
    description: [
      <p className="">
        - Transform Adobe PDF,Figma designs into working websites using Reactjs
        & Typescript
      </p>,
      <p>- Revamping existing websites to Reactjs</p>,
      <p>- Optimizing initial page loads and improving SEO.</p>,
    ],

    skills: [
      <ReactjsIcon />,
      <NodejsIcon />,
      <TypescriptIcon />,
      <BootStrapIcon />,
      <GitIcon />,
    ],
    companyIcon: (
      <FaBuildingColumns className="w-[56px] text-zinc-300 text-4xl" />
    ),
  },
  {
    company: {
      duration: "Full time",
      location: "Kampala, Central UG",
      name: "Makerere AI Labs",
    },
    job: { title: "Junior Frontend Developer", type: "On-site" },
    duration: {
      startDate: "May 2020",
      endDate: "Dec 2020",
      totalTime: `${getMonths("20200501", "20201201")} mons`,
    },
    description: [
      <p className="">- Built websites using HTML & CSS and Javascript.</p>,
      <p>- Learnt developing UI components using reactjs.</p>,
      <p>
        - Learnt industry best practices suchas DRY, SOLID, Single
        Responsibility, as well as project structing.
      </p>,
      <p>
        - Learnt web hosting on platforms like vercel, heroku, and netlify.
      </p>,
    ],

    skills: [
      <HTMLIcon />,
      <CssIcon />,
      <ReactjsIcon />,
      <JavascriptIcon />,
      <GitIcon />,
      <NodejsIcon />,
    ],
    companyIcon: <ImageIcon src={MakLogo} alt="Mak_logo" />,
  },
];

export default workExperienceData;
