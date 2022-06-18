import React, { useState } from "react";

const ProjectList = ({ tools }) => {

  const [projects] = useState([
    {
      name: "Work Day Scheduler",
      tools: "HTML | CSS | jQuery | Moment.js",
      description:
        "A simple calendar application that allows the user to save events for each hour of the work day.",
    },
    {
      name: "Employee Tracker",
      tools: "Node.js | mysql | JavaScript | dotenv | Inquirer",
      description:
        "Employee tracker app will help business owners to view, manage the departments, roles, and employees in the company.",
    },
    {
      name: "PokeHunt",
      tools: "HTML | CSS (Bulma) | JavaScript (jQuery) | APIs",
      description:
        "PokeHunt is a database search that takes in the name of a Pokemon from the user and returns basic info such as the Pokemon image, type, and stats.",
    },
    {
      name: "Online Retailer",
      tools: "Node.js | mysql | Express.js | JavaScript | Insomnia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Weather Dashboard",
      tools: "Server-Side APIs | localStorage | HTML | CSS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Code Quiz",
      tools: "JavaScript | HTML | CSS",
      description:
        "This is a timed quiz on JavaScript fundamentals that stores high scores.",
    },
    {
      name: "Run Buddy",
      tools: "HTML | CSS",
      description: "A website that offers fitness training services.",
    },
    {
      name: "U Develop It",
      tools: "SQL | Back-end APIs",
      description:
        "A voting app, with candidates, votestable and election database.",
    },
    {
      name: "Food Festival",
      tools: "Webpack | PWA | Service-Worker | Node.js",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Note Taker",
      tools: "food",
      description:
        "Food Festival app will work online and offline, installable, visible in search engines. When from offline to online transition, it will upload all offline data to the database.",
    },
    {
      name: "Team Profile Generator",
      tools: "Node.js | Jest | JavaScript | GitHub",
      description:
        "Generates a webpage that displays team's basic info that enables quick access to their emails and GitHub profiles, etc.",
    },
    {
      name: "Robot Gladiators",
      tools: "JavaScript | HTML",
      description:
        "In this game, robots fight and their health points change with when opponent attacks with attack points.",
    },
    {
      name: "Zookeepr",
      tools: "Express.js | JavaScript | HTML | CSS",
      description:
        "Using server-side APIs/Express.js framework server is created that will respond requests from the client.",
    },
    {
      name: "Budget Tracker",
      tools:
        "JavaScript | HTML | MongoDB Atlas | Express.js | CSS | Node.js | Heroku",
      description:
        "Budget tracker app will help users a fast and easy way to track their money. It will also allow them to access that information at any time. The app will even work even limited or without internet connection.",
    },
    {
      name: "Password Generator",
      tools: "JavaScript | CSS | HTML",
      description:
        "Application generates a random password based on user-selected criteria.",
    }
  ]);

  const currentproject = projects.filter((project) => project.tools === tools);


  return (
    <div>

      <div className="flex-row">
        {currentproject.map((image, i) => (
          <img
            src={require(`../../assets/small/${tools}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
