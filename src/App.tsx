import "./App.css";
import Education from "./components/education";
import ProfileOverview from "./components/profileOverview";
import Projects from "./components/projects";
import WorkExperience from "./components/workExperience";
import { GithubRepoCard, TopLanguageCard } from "./data/githubCard";
import { GITHUB_REPO, GITHUB_USERNAME } from "./data/mydata";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import FeedbackForm from "./components/feedbackForm";
import FloatingButton from "./components/floatingButton";
import { useState } from "react";

function App() {
  const [isContactFormOpen, setIsContentFormOpen] = useState(false);

  // console.log("Env: ", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

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

        {/* {isContactFormOpen && (
          <div className="fixed bottom-20 right-2 md:right-5 ">
            <FeedbackForm />
          </div>
        )}
        <FloatingButton
          isOpen={isContactFormOpen}
          onClick={() => setIsContentFormOpen((prev) => !prev)}
        /> */}
      </div>
    </>
  );
}

export default App;
