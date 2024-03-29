import Markdown from "markdown-to-jsx";
import React from "react";

interface GithubRepoProps {
  githubUsername: string;
  githubRepo: string;
  hideBorder?: "true" | "false";
}

interface TopLanguageProps {
  githubUsername: string;
  githubRepo?: string;
  titleColor?: string;
  title?: string;
  langCount?: number;
  hideBorder?: "true" | "false";
  layout?: "compact" | "pie" | "donut-vertical" | "donut";
}

export const TopLanguageCard: React.FC<TopLanguageProps> = ({
  githubUsername,
  layout = "donut",
  langCount = 10,
  hideBorder = "true",
  title = "Languages%20I%20mostly%20use",
  titleColor = "000",
}) => {
  const _topLang = `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=${layout}&custom_title=${title}&title_color=${titleColor}&langs_count=${langCount}&hide_border=${hideBorder})](https://github.com/${githubUsername}/)`;

  return (
    <Markdown
      children={_topLang}
      options={{
        createElement(type, props, children) {
          return (
            <div className="w-full shadow">
              {React.createElement(type, props, children)}
            </div>
          );
        },
      }}
    />
  );
};

export const GithubRepoCard: React.FC<GithubRepoProps> = ({
  githubRepo,
  githubUsername,
  hideBorder = "true",
}) => {
  const portfolio = `[![Portofolio Repository](https://github-readme-stats.vercel.app/api/pin/?username=${githubUsername}&repo=${githubRepo}&hide_border=${hideBorder})](https://github.com/${githubUsername}/${githubRepo})`;

  return (
    <Markdown
      children={portfolio}
      options={{
        createElement(type, props, children) {
          return (
            <div className="w-full shadow">
              {React.createElement(type, { ...props }, children)}
            </div>
          );
        },
      }}
    />
  );
};
