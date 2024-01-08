const main = document.querySelector(".Main");
main.scrollIntoView({ behavior: "smooth" });
const services = document.querySelectorAll(".service-section");
const buttons = document.querySelectorAll(".button");
const contact = document.querySelector(".Contact");
const content = document.querySelector(".Content");
const skills = document.querySelector(".Skills");
const about = document.querySelector(".About");

function createDotedLineSVG(percentage) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", "20");

  const dotSpacing = 20;
  const dotRadius = 5;
  const totalDots = 10;
  const numberOfFilledDots = Math.round(((percentage * 10) / 100) * totalDots);

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("cx", i * dotSpacing + dotRadius * 2);
    dot.setAttribute("cy", 10);
    dot.setAttribute("r", dotRadius);
    dot.setAttribute("fill", i < numberOfFilledDots ? "#c71340" : "none");
    dot.setAttribute("stroke", "#c71340");
    svg.appendChild(dot);
  }

  return svg;
}

function createFilledCircleSVG(percentage, whattowrite) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100");
  svg.setAttribute("height", "100");

  const circle = document.createElementNS(svgNS, "circle");
  const radius = 40;
  const centerX = 50;
  const centerY = 50;

  circle.setAttribute("cx", centerX);
  circle.setAttribute("cy", centerY);
  circle.setAttribute("r", radius);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "#c71340");
  circle.setAttribute("stroke-width", "10");
  circle.setAttribute("stroke-dasharray", 2 * Math.PI * radius);
  circle.setAttribute(
    "stroke-dashoffset",
    ((100 - percentage) / 100) * 2 * Math.PI * radius
  );
  circle.setAttribute("transform", "rotate(-90 50 50)");

  svg.appendChild(circle);

  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("x", centerX);
  text.setAttribute("y", centerY);
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("dominant-baseline", "middle");
  text.setAttribute("fill", "white");
  text.textContent = whattowrite;

  svg.appendChild(text);

  return svg;
}

var typed = new Typed(".changinText", {
  strings: [
    "Social Media Expert.",
    "Digital Marketer.",
    "Programmer.",
    "Designer.",
    "Content Writer.",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

services.forEach((service) => {
  const p = service.querySelector("p");
  const h1 = service.querySelector("h1");
  const span = h1.querySelector("span");

  span.style.display = "none";
  p.style.display = "none";

  service.addEventListener("mouseover", () => {
    span.style.display = "block";
  });

  service.addEventListener("mouseout", () => {
    span.style.display = "none";
  });

  service.addEventListener("click", () => {
    if (p.style.display == "block") {
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }
  });
});

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    switch (e.innerHTML) {
      case "Contact":
        contact.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "Content":
        content.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "Skills":
        skills.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "About":
        about.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      case "Go back":
        main.scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      default:
        break;
    }
  });
});

const Skillas = [
  "Leadership",
  "Communication",
  "Problem Solving",
  "Team Work",
  "Persuasion",
  "Adaptability",
];
const SkillasPercentage = ["9", "8", "7", "8", "7", "7"];

const langs = ["Arabic", "Turkish", "English", "German"];
const langsPercentage = [6, 5, 3, 2];
const langsLevel = ["Native", "C1", "B1", "A2"];
const skillsWrapper = document.querySelector(".skills-wrapper");
const langSkillsWrapper = document.querySelector(".lang-skills-wrapper");

Skillas.forEach((skill, i) => {
  let div = document.createElement("div");
  div.classList.add("skilla");
  let p = document.createElement("p");
  p.innerHTML = skill;
  p.classList.add("skillText");

  div.appendChild(p);
  div.appendChild(createDotedLineSVG(SkillasPercentage[i]));
  skillsWrapper.appendChild(div);
});

langs.forEach((lang, i) => {
  let div = document.createElement("div");
  div.classList.add("langSkilla");
  let p = document.createElement("p");
  p.innerHTML = lang;
  p.classList.add("skillText");
  let pLevel = document.createElement("p");
  pLevel.innerHTML = langsPercentage[i];

  div.appendChild(p);
  div.appendChild(
    createFilledCircleSVG((100 * langsPercentage[i]) / 6, langsLevel[i])
  );
  langSkillsWrapper.appendChild(div);
});
