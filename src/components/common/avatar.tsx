import React from "react";

import IsaacAvatar from "../../assets/images/isaac.png";

interface Props {
  size?: string;
}

export default function Avatar({ size = "w-[200px]" }: Props) {
  return (
    <div
      className={`border border-zinc-200 rounded-full overflow-hidden flex justify-center items-center relative ${size}`}
    >
      <img
        src={IsaacAvatar}
        alt="Isaac_Katongole_avatar"
        title="Isaac Katongole | Frontend Developer"
        className="relative -left-[12px] top-3 -rotate-6"
      />
    </div>
  );
}
