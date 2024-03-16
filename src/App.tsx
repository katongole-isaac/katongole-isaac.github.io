import "./App.css";
import Avatar from "./components/common/avatar";
import Education from "./components/education";

function App() {
  return (
    <>
      <div className="">
        <div className=" mx-auto max-w-[1100px] h-screen border border-red-200">
          <div className="md:flex gap-6 flex-wrap h-full">
            <div className="flex-1 border border-black"></div>
            <div className="basis-1/3 py-4 px-2 border border-red-700">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
