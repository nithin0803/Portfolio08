import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  foodRecipie,
  covidTracker,
  netflixClone,
  weather,
  reactQuery,
} from "../assets";
library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);
const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};
const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
};
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const introduction = {
  text: [
    "Hello there! I'm heartily delighted that you are here (:",

    "My name is Nithin, I'm 24 and a B-tech graduate from National Institute Of Technology Karnataka (NITK). I'm passionate about the flourishing technologies related to User Interface Development.",

    "Apart from my journey of technological acquaintances, I am into potrait/nature painting which makes my leisure blissful. I love watching animea, because of the most insightful character named luffy which gives me a different feel of merriness. Being a cynophile, I even engage slightly with the video-games which are jovial enough to me.",

    "I am extremely pleased to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences.. Your visit to my portfolio is deeply appreciated !",
  ],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable and dynamic components and managing application state using hooks and context.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "react-query",
    title: "React Query",
    icon: reactQuery,
    description:
      "I have professional experience in using react-query library for maintaing and caching asynchronous data ",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
];
const memoji = {
  image: [avatar],
};

const projects = [
  {
    name: "Covid Tracker App",
    description:
      "The COVID Tracking Project collects and publishes the most complete testing data available for all Countries around the world from Rapid API. It allows you to display data based on the selection of countries and also to filter data based on New Cases,Cases per Million population, Deaths per million population.",
    image: covidTracker,
    source_code_link: "https://github.com/nithin0803/covid-tracker",
    demo_link: "https://covid-tracker-d5f0b.web.app/",
  },
  {
    name: "Netflix-Clone",
    description:
      "A netflix-clone-react-app using TMDB API to fetch the movies data and react-youTube, react-movieTrailer is used to pop up YouTube trailler when user click’s on the movie poster.",
    image: netflixClone,
    source_code_link: "https://github.com/nithin0803/netflix-clone",
    demo_link: "https://netflix-clone-67786.web.app/",
  },
  {
    name: "FoodRecipie App",
    description:
      "A Front-end JavaScript project, where website displays food recipes based on ingredients searched by user’s using TheMealDB web API.",
    image: foodRecipie,
    source_code_link: "https://github.com/nithin0803/Food-recipe-project",
    demo_link: "https://nithin0803.github.io/Food-recipe-project/",
  },
  // {
  //   name: "Weather Forcast App",
  //   description:
  //     "A react application which displys the weather forcast of the city searched by user. This App also displays the each day forcast of the current week and 24 hours weather forcast",
  //   image: weather,
  //   source_code_link: "https://github.com/nithin0803/weather",
  //   demo_link: "https://cranky-edison-cbd9c2.netlify.app/",
  // },
];
export { introduction, skills, icons, projects, media, memoji };
