import IsaacArt from "../../assets/images/ascii_art.png";

export default function TextArt() {
  return (
    <div className="h-full overflow-hidden bg-white border-b ">
      <img src={IsaacArt} className=" scale-y-150 md:scale-y-100  " />
    </div>
  );
}
