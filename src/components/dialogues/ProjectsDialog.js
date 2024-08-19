import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogueContext } from "@/hooks/DialogueContext";
import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"; 
import { ResumeContext } from "@/hooks/ResumeContext";


const ProjectsDialog = () => {
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const { setProjects, projects } = useContext(ResumeContext);
  const [projectName, setProjectName] = useState("");
  const [descriptionPoints, setDescriptionPoints] = useState([""]);

  const handleAddPoint = () => {
    if (descriptionPoints.length < 5) {
      setDescriptionPoints([...descriptionPoints, ""]);
    }
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...descriptionPoints];
    newPoints[index] = value;
    setDescriptionPoints(newPoints);
  };

  const saveProject = () => {
    const newProject = {
      projectName,
      projectPoints: descriptionPoints.filter(point => point.trim() !== ""), 
    };

    if (projects.length === 1 && projects[0].projectName === "Default Project") {
      setProjects([newProject]);
    } else {
      setProjects([...projects, newProject]);
    }

    closeModal();
    setProjectName(""); 
    setDescriptionPoints([""]); 
  };

  return (
    <Dialog open={modalType === "projects" && isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add a project</DialogTitle>
          <Label>Project Name</Label>
          <Input value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <Label>Project Description points</Label>
          {descriptionPoints.map((point, index) => (
            <Input
              key={index}
              value={point}
              onChange={(e) => handlePointChange(index, e.target.value)}
              className="mb-2"
            />
          ))}
          {descriptionPoints.length < 4 && (
            <Button onClick={handleAddPoint} className="mt-2">
              + Add Point
            </Button>
          )}
          <Button onClick={saveProject}>Save</Button>
          <DialogDescription>
            This will be added under the projects section of your resume. Each point should describe your job in some way.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsDialog;
