import { useContext } from "react";
import { DialogueContext } from "@/hooks/DialogueContext";


export const useDialogActions = () => {
    const { openModal } = useContext(DialogueContext);

    const handleProjectEdit = (projectId) => {
        openModal("projects", "edit", projectId);
    };

    const handleExperienceEdit = (experienceId) => {
        openModal("experience", "edit", experienceId);
    };

    return {
        handleProjectEdit,
        handleExperienceEdit,
    };
};
