export interface IProjects {
  title: string;
  desc: string;
  images: string[];
  techStacks: { title: string; img: string }[];
  btns: { githubUrl: string; liveUrl: string };
}

export const projects: IProjects[] = [
  {
    title: "Card Insider Lounges",
    desc: "Clone of a well-known website that let users to create, send andanalyze sophisticated survey template.",
    images: [
      "https://github.com/ShrikantJawla/portfolio_images/blob/main/projects/lounges/lounges.png?raw=true",
    ],
    techStacks: [
      {
        title: "React",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/react.png",
      },
      {
        title: "Redux",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/redux.png",
      },
      {
        title: "Css",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/css.png",
      },
      {
        title: "Tailwindcss",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/tailwind.png",
      },
      {
        title: "Nodejs",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/nodejs.png",
      },
      {
        title: "Expressjs",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/expressjs.png",
      },
      {
        title: "PostgreSQL",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/postgresql.svg",
      },
    ],
    btns: {
      githubUrl: "",
      liveUrl: "https://lounges.cardinsider.com/",
    },
  },

  {
    title: "Fin Paisa",
    desc: "Financial Influencers' Network to make money with the financial offers that boost your earnings.",
    images: [
      "https://github.com/ShrikantJawla/portfolio_images/blob/main/projects/finpaisa/Add%20a%20little%20bit%20of%20body%20text.png?raw=true",
    ],
    techStacks: [
      {
        title: "Html",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/html.png",
      },
      {
        title: "Javascript",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/js.png",
      },
      {
        title: "Css",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/css.png",
      },
      {
        title: "Tailwindcss",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/tailwind.png",
      },
      {
        title: "Nodejs",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/nodejs.png",
      },
      {
        title: "Expressjs",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/expressjs.png",
      },
      {
        title: "PostgreSQL",
        img: "https://raw.githubusercontent.com/ShrikantJawla/portfolio_images/main/skills/postgresql.svg",
      },
    ],
    btns: {
      githubUrl: "",
      liveUrl: "https://finpaisa.in",
    },
  },
];
