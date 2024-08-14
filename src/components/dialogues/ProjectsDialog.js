import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { DialogueContext } from "@/hooks/DialogueContext";
  import { useContext } from "react";
  
  const ProjectsDialog = () => {
    const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
    console.log(modalType, isModalOpen);
  
    return (
      <Dialog open={modalType === "projects" && isModalOpen} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ProjectsDialog;
  