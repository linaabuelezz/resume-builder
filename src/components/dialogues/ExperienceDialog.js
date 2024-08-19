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

  
  const ExperienceDialog = () => {
    const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
    console.log(modalType, isModalOpen);
    const [descriptionPoints, setDescriptionPoints] = useState([""]);
    const { setExperience, experiences } = useContext(ResumeContext);
    const [experienceName, setExperienceName] = useState("");

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

    const saveExperience = () => {
      const newExperience = {
        experienceName,
        experiencePoints: descriptionPoints.filter(point => point.trim() !== ""), 
      };
      setExperience([...experiences, newExperience]);
      closeModal();
      setExperienceName(""); 
      setDescriptionPoints([""]); 
    };
  
    return (
      <Dialog open={modalType === "experience" && isModalOpen} onOpenChange={closeModal}>
        <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add an experience</DialogTitle>
          <Label>Company name</Label>
          <Input />
          <Label>Job position</Label>
          <Input />
          <Label>Job description points</Label>
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
          <Button onClick={saveExperience}>Save</Button>
          <DialogDescription>
            This will be added under the experience section of your resume. Each point should describe your project in some way. It is a good idea to use numbers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceDialog;
