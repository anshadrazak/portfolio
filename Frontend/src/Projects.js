import React, { useEffect, useState } from 'react';
import './Projects.css';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching projects:", error);
        alert("Error fetching projects. Check the console for more details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleViewProject = (link) => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="projectsdiv">
      {projects.map((project) => (
        <div className="project1" key={project._id}>
          <div className="p1img">
            <img className="bbimg" src={project.image} alt={project.name} />
          </div>
          <div className="p1dets">
            <h1 className="p1heading">{project.name}</h1>
            <h2 className="p1tag">{project.cont}</h2>
            <button className="p1btn" onClick={() => handleViewProject(project.link)}>View Project</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
