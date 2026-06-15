import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    image: "./assets/myportfolio.png",
    link: "https://code-with-nontu.netlify.app/",
  },
  {
    title: "Podcast App",
    description: "A web app for streaming and managing podcasts.",
    image: "./assets/apppodcast.png",
    link: "https://nonmto-25498-fto-2506-group-b-nontu.vercel.app/",
  },
  {
    title: "Resume Project",
    description: "An online resume for professionals.",
    image: "./assets/resumeproject.png",
    link: "https://nontuthuzelo-mtolo-sdf-resume-project.netlify.app/",
  },
];

const MyWork = () => {
  return (
    <section id="mywork" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Example of projects I have designed and built, including school
          projects demonstrating frontend skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img src={project.image} alt={project.title} 
            className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm text-center"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default MyWork;
