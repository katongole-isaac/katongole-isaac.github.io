import "./App.css";
import Education from "./components/education";
import ProfileOverview from "./components/profileOverview";
import WorkExperience from "./components/workExperience";

function App() {
  return (
    <>
      <div className="">
        <div className=" mx-auto max-w-[1100px] h-screen boorder border-red-200">
          <div className="md:flex gap-6 flex-wrap h-full">
            <div className="flex-1 boorder border-black">
              <ProfileOverview />
              <WorkExperience />
            </div>
            <div className="basis-1/3 py-4 px-2 boorder border-red-700">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
