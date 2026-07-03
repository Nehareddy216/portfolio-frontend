import axios from 'axios';
import { useEffect, useState } from 'react';

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios.get('https://YOUR-BACKEND-URL.onrender.com/projects')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project) => (

            <div className="project-card" key={project._id || project.id}>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* GitHub Link only */}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

            </div>

          ))
        )}

      </div>

    </section>
  );
}

export default Projects;