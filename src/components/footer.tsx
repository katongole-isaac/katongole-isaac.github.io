
export default function Footer() {
  return (
    <div className="my-3 mb-5">
      <div className="flex flex-col gap-2">
        <hr className="border-gray-200 " />
        <div className="px-2">
          <p className="text-slate-400 text-xs text-center">
            This is an Open-source project. You can clone and use it freely. You
            can find it{" "}
            <a
              href="https://github.com/katongole-isaac/katongole-isaac.github.io"
              target="_blank"
              className="text-blue-400"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
