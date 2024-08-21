import { useContext } from "react";
import { DialogueContext } from "@/hooks/DialogueContext";
import { ResumeContext } from "@/hooks/ResumeContext";

export const useDialogActions = () => {
    const { openModal } = useContext(DialogueContext);
    const { projects, setProjectToEdit, experiences, setExperienceToEdit } = useContext(ResumeContext);

    const handleProjectEdit = (projectId) => {
        const projectToEdit = projects.find(project => project.id === projectId);
        if (projectToEdit) {
            setProjectToEdit(projectToEdit);
            openModal("projects", "edit", projectId);
        }
        console.log(projectId);
        return projectId;
    };

    const handleExperienceEdit = (experienceId) => {
        const experienceToEdit = experiences.find(experience => experience.id === experienceId);
        if (experienceToEdit) {
            setExperienceToEdit(experienceToEdit);
            openModal("experience", "edit", experienceId);
        };
        console.log(experienceId);
        return experienceId;
    };

    return {
        handleProjectEdit,
        handleExperienceEdit,
    };
};
