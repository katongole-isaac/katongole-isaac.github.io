import Markdown from "markdown-to-jsx";
import "./App.css";
import Education from "./components/education";
import ProfileOverview from "./components/profileOverview";
import Projects from "./components/projects";
import WorkExperience from "./components/workExperience";
import { GithubRepoCard, TopLanguageCard } from "./data/githubCard";
import { GITHUB_REPO, GITHUB_USERNAME } from "./data/mydata";

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
            <div className="basis-1/3 py-4 px-2 space-y-2 boorder border-red-700">
              <GithubRepoCard
                githubUsername={GITHUB_USERNAME}
                githubRepo={GITHUB_REPO}
              />
              <Education />
              <TopLanguageCard
                githubUsername={GITHUB_USERNAME}
                githubRepo={GITHUB_REPO}
              />

              <Projects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
