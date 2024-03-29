import "./App.css";
import Education from "./components/education";
import ProfileOverview from "./components/profileOverview";
import Projects from "./components/projects";
import WorkExperience from "./components/workExperience";
import { GithubRepoCard, TopLanguageCard } from "./data/githubCard";
import { GITHUB_REPO, GITHUB_USERNAME } from "./data/mydata";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-[#fafafa] ">
        <div className=" mx-auto max-w-[1100px] ">
          <div className="md:flex gap-4 flex-wrap h-full">
            <div className="flex-1">
              <ProfileOverview />
              <AboutMe />
              <WorkExperience />
            </div>
            <div className="basis-1/3 py-4 px-2 space-y-2 ">
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
        <Footer />
      </div>
    </>
  );
}

export default App;
