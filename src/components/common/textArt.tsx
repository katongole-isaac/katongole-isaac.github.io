import React from "react";

import IsaacArt from "../../assets/images/ascii_art.png";

export default function TextArt() {
  const art = () => {};

  return (
    <div className="h-full overflow-hidden bg-slate-50 border-b ">
      <img src={IsaacArt} className=" scale-y-150 md:scale-y-100  " />
    </div>
  );
}
