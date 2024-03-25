import React from "react";
import { IconBaseProps, IconType } from "react-icons";

const SkillIcon: React.FC<{ icon: IconType } & IconBaseProps> = ({
  icon,
  className,
  ...props
}) => {
  const Icon = icon;

  return <Icon className={`cursor-pointer ${className}`} {...props} />;
};

export default SkillIcon;
