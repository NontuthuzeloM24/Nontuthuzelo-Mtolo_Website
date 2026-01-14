import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    image: "./assets/portfolio.png",
    link: "https://nontuthuzelo-mtolo-portfolio.netlify.app/",
  },
  {
    title: "Podcast App",
    description: "A web app for streaming and managing podcasts.",
    image: "./assets/podcast.png",
    link: "https://nonmto-25498-fto-2506-group-b-nontu.vercel.app/",
  },
  {
    title: "Resume Project",
    description: "An online resume for professionals.",
    image: "./assets/resume-project.png",
    link: "https://nontuthuzelo-mtolo-sdf-resume-project.netlify.app/",
  },
];

const MyWork = () => {
  return (
    <section>
      <div>
        <h2>My Work</h2>
        <p>
          Example of projects I have designed and built, including school
          projects demonstrating frontend skills.
        </p>
      </div>
      <div>
        {projects.map((project, idx) => (
          <div key={idx}>
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
