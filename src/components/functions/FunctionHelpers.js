

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

export const handleSocialLinkDelete = (linkId, socialLinks, setSocialLinks) => {
    const updatedSocialLinks = socialLinks.filter(socialLink => socialLink.id !== linkId);
    setSocialLinks(updatedSocialLinks);
    console.log(`Social link with ID ${linkId} deleted`);
    console.log(socialLinks);
};

