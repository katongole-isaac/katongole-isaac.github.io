import {
  BootStrapIcon,
  ChakraIcon,
  CssIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  LinuxIcon,
  NodejsIcon,
  ReactjsIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../components/icons";
import { ProjectData } from "../components/projects";
import { HTMLAttributes } from "react";

const ProjectImage: React.FC<{
  paraProps?: HTMLAttributes<HTMLParagraphElement>;
  divProps?: HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
}> = ({ paraProps, divProps, children }) => {
  const paraContainer: { [x: string]: any } = {};
  const divContainer: { [x: string]: any } = {};

  if (divProps) {
    const { className, ...otherDivProps } = divProps;
    divContainer.className = className;
    divContainer.others = otherDivProps;
  }

  if (paraProps) {
    const { className: paraClassName, ...otherParaProps } = paraProps;
    paraContainer.className = paraClassName;
    paraContainer.others = otherParaProps;
  }

  return (
    <div
      className={`w-full flex items-center justify-center ${divContainer?.className} `}
      {...divContainer?.others}
    >
      <p
        className={`text-4xl font-bold ${paraContainer?.className}`}
        {...paraContainer?.others}
      >
        {children}
      </p>
    </div>
  );
};

export const projectData: ProjectData[] = [
  {
    projectName: "RAK ERP System Project",
    projectAlt: "RAK task management system.",
    projectURL: "https://rak-erp.com",
    projectImg: (
      <ProjectImage
        children="R"
        paraProps={{ className: " text-blue-400 " }}
        divProps={{ className: "bg-slate-100 " }}
      />
    ),
    skills: [
      <ReactjsIcon />,
      <TypescriptIcon />,
      <GitIcon />,
      <NodejsIcon />,
      <ChakraIcon />,
      <LinuxIcon />,
      <HTMLIcon />,
      <CssIcon />,
    ],
  },
  {
    projectName: "Dispney Clone",
    projectAlt: "Inspired by dispney website.",
    projectURL: "https://disneyclone-a32e4.web.app/",
    projectImg: (
      <ProjectImage
        children="D"
        paraProps={{ className: "font-bold   text-indigo-400 text-4xl" }}
        divProps={{ className: "bg-indigo-100" }}
      />
    ),
    skills: [
      <GitIcon />,
      <ReactjsIcon />,
      <HTMLIcon />,
      <SassIcon />,
      <BootStrapIcon />,
      <ReduxIcon />,
      <CssIcon />,
      <TypescriptIcon />,
      <NodejsIcon />,
      <TailwindIcon />,
    ],
  },

  {
    projectName: "Rawg.io Games",
    projectAlt:
      "This is project was mainly focused on consuming Rawg APIs for games",
    projectURL: "https://games-ashen-eight.vercel.app/",
    projectImg: (
      <ProjectImage
        children="G"
        paraProps={{ className: "font-bold   text-purple-400 text-4xl" }}
        divProps={{ className: "bg-purple-100" }}
      />
    ),
    skills: [
      <ReactjsIcon />,
      <HTMLIcon />,
      <CssIcon />,
      <TypescriptIcon />,
      <NodejsIcon />,
      <GitIcon />,
      <TailwindIcon />,
    ],
  },
  {
    projectName: "Covid19 Tracker",
    projectAlt: "This project was based on the covid19 cases across the world.",
    projectURL: " https://covidtrucker.netlify.app/",
    projectImg: (
      <ProjectImage
        children="C"
        paraProps={{ className: "font-bold   text-red-400 text-4xl" }}
        divProps={{ className: "bg-red-100" }}
      />
    ),
    skills: [
      <ReactjsIcon />,
      <HTMLIcon />,
      <CssIcon />,
      <TypescriptIcon />,
      <NodejsIcon />,
      <GitIcon />,
      <TailwindIcon />,
    ],
  },

  {
    projectName: "Manage Landing Page",
    projectAlt: "This project was a challenge hosted on frontend mentor. ",
    projectURL: "https://katongole-isaac.github.io/manage-landing/",
    projectImg: (
      <ProjectImage
        children="M"
        paraProps={{ className: "font-bold   text-pink-400 text-4xl" }}
        divProps={{ className: "bg-pink-100" }}
      />
    ),
    skills: [
      <ReactjsIcon />,
      <JavascriptIcon />,
      <NodejsIcon />,
      <HTMLIcon />,
      <GitIcon />,
      <CssIcon />,
      <SassIcon />,
    ],
  },
  {
    projectName: "Easy Bank Landing Page",
    projectURL: "https://katongole-isaac.github.io/easybank/",
    projectAlt:
      "Landing Page for easy Bank. A challenge hosted on fronten mentor",
    projectImg: (
      <ProjectImage
        children="E"
        paraProps={{ className: "font-bold   text-amber-500 text-4xl" }}
        divProps={{ className: "bg-amber-100" }}
      />
    ),
    skills: [
      <ReactjsIcon />,
      <TypescriptIcon />,
      <GitIcon />,
      <SassIcon />,
      <NodejsIcon />,
      <HTMLIcon />,
      <CssIcon />,
    ],
  },
  {
    projectName: "Bookmark Landing Page",
    projectURL: "https://katongole-isaac.github.io/bookmark/",
    projectAlt: "Bookmark Landing page. A challenge hosted on fronten mentor",
    projectImg: (
      <ProjectImage
        children="B"
        paraProps={{ className: "font-bold   text-lime-400 text-4xl" }}
        divProps={{ className: "bg-lime-100" }}
      />
    ),
    skills: [
      <ReactjsIcon />,
      <TypescriptIcon />,
      <GitIcon />,
      <SassIcon />,
      <NodejsIcon />,
      <HTMLIcon />,
      <CssIcon />,
    ],
  },
];
