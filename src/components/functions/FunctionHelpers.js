

export const handleProjectEdit = (projectId, projects, setProjects) => {
    console.log(`clicked ${projectId}`);
};

export const handleExperienceEdit = (experienceId, experiences, setExperiences) => {
    console.log(`clicked ${experienceId}`);
};

export const handleProjectDelete = (projectId, projects, setProjects) => {
    const updatedProjects = projects.filter(project => project.id !== projectId)
    setProjects(updatedProjects);
    console.log(`Project with ID ${projectId} deleted`);
    console.log(projects);
};

export const handleExperienceDelete = (experienceId, experiences, setExperiences) => {
    const updatedExperiences = experiences.filter(experience => experience.id !== experienceId);
    setExperiences(updatedExperiences);
    console.log(`Experience with ID ${experienceId} deleted`);
    console.log(experiences);
};

