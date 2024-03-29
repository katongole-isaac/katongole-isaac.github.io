import {
  FaBootstrap,
  FaLinux,
  FaAws,
  FaSass,
  FaPython,
  FaMarkdown,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { IconBaseProps } from "react-icons";
import { SiChakraui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { VscTerminalBash } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";

import SkillIcon from "../skillIcon";

export const ChakraIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={SiChakraui}
    title="ChakraUI"
    className="bg-white text-cyan-500 cursor-pointer"
    {...props}
  />
);

export const MarkdownIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaMarkdown}
    title="Markdown"
    className="bg-white text-blue-500 cursor-pointer"
    {...props}
  />
);

export const FirebaseIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={IoLogoFirebase}
    title="Firebase"
    className="bg-white text-orange-400 cursor-pointer"
    {...props}
  />
);

export const PythonIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaPython}
    title="Python"
    className="bg-white text-blue-500 cursor-pointer"
    {...props}
  />
);

export const MysqlIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={GrMysql}
    title="Mysql"
    className="bg-white text-blue-500 cursor-pointer"
    {...props}
  />
);

export const AwsIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaAws}
    title="Git"
    className="bg-white text-yellow-800 cursor-pointer"
    {...props}
  />
);

export const MongoDBIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={SiMongodb}
    title="MongoDB"
    className="bg-white text-green-600 cursor-pointer"
    {...props}
  />
);

export const GitIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaGitAlt}
    title="Git"
    className="bg-white text-orange-600 cursor-pointer"
    {...props}
  />
);
export const NodejsIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaNodeJs}
    title="Nodejs"
    className="bg-white text-green-700 cursor-pointer"
    {...props}
  />
);

export const ReactjsIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaReact}
    title="ReactJS"
    className="text-cyan-500 cursor-pointer"
    {...props}
  />
);

export const JavascriptIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={IoLogoJavascript}
    title="Javascript"
    className="text-yellow-600 bg-white"
    {...props}
  />
);
export const TypescriptIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={SiTypescript}
    title="Typescript"
    className="text-blue-500 cursor-pointer bg-white"
    {...props}
  />
);

export const HTMLIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaHtml5}
    title="HTML"
    className="text-orange-500 cursor-pointer bg-white"
    {...props}
  />
);

export const CssIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaCss3}
    title="CSS"
    className="text-blue-500 cursor-pointer bg-white"
    {...props}
  />
);

export const BootStrapIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaBootstrap}
    title="Bootstrap"
    className="text-purple-500 cursor-pointer bg-white"
    {...props}
  />
);

export const TailwindIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={SiTailwindcss}
    title="TailwindCss"
    className="text-blue-500 cursor-pointer bg-white"
    {...props}
  />
);

export const LinuxIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaLinux}
    title="Linux"
    className="text-gray-800 cursor-pointer bg-white"
    {...props}
  />
);

export const ReduxIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={TbBrandRedux}
    title="Redux"
    className="text-purple-500 cursor-pointer bg-white"
    {...props}
  />
);
export const SassIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={FaSass}
    title="Sass"
    className="text-pink-800 cursor-pointer bg-white"
    {...props}
  />
);

export const BashIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={VscTerminalBash}
    title="Bash"
    className="text-gray-800 cursor-pointer bg-white"
    {...props}
  />
);
export const NextjsIcon: React.FC<IconBaseProps> = ({ ...props }) => (
  <SkillIcon
    icon={TbBrandNextjs}
    title="Nextjs"
    className="text-gray-800 cursor-pointer bg-white"
    {...props}
  />
);
