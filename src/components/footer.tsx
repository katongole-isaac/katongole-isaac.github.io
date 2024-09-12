
export default function Footer() {
  return (
    <div className="my-3 mb-5">
      <div className="flex flex-col gap-2">
        <hr className="border-gray-200 " />
        <div className="px-2">
          <p className="text-slate-400 text-xs text-center">
            &copy; Copyright | All rights reserved &trade;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
