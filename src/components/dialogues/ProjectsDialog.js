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

const ProjectsDialog = () => {
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
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

  return (
    <Dialog open={modalType === "projects" && isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add a project</DialogTitle>
          <Label>Project Name</Label>
          <Input />
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
          <DialogDescription>
            This will be added under the projects section of your resume. Each point should describe your job in some way.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsDialog;
