const _ = (elem) => document.querySelector(elem);
const EMAIL = "katongolelsaac78@gmail.com";
const GITHUB_ACC = "https://github.com/katongole-isaac";
const LINKEDIN_ACC = "https://linkedin.com/in/katongole-isaac-7a22aa178";

let clicked = false;

function copy() {
  const mail = _(".mail");
  const github = _(".github");
  const linkedin = _(".linkedin");
  mail.onclick = () => mailClick(EMAIL, clicked);
  github.onclick = () => mailClick(GITHUB_ACC, clicked);
  linkedin.onclick = () => mailClick(LINKEDIN_ACC, clicked);
}

copy();

/**
 *
 * @param {*} contact
 * @param {*} clicked
 * @returns JSX
 */

const mailClick = (contact, clicked) => {
  clicked = false;
  if (typeof contact !== "string") return;

  const contentDetailsDiv = _(".contentDetails");
  if (contentDetailsDiv.lastElementChild) {
    contentDetailsDiv.removeChild(contentDetailsDiv.lastElementChild);
  }
  if (!clicked) {
    clicked = true;
    const paraLink = document.createElement("a");
    paraLink.textContent = contact;
    paraLink.href = contact;
    _(".contentDetails").appendChild(paraLink);

    setTimeout(() => {
      _(".contentDetails").removeChild(paraLink);
    }, 5000);
  }
};
