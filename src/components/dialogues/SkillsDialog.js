import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DialogueContext } from "@/hooks/DialogueContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResumeContext } from "@/hooks/ResumeContext";

const SkillsDialog = () => {
  const { skills, setSkills } = useContext(ResumeContext);
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const [skill, setSkill] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const saveSkill = () => {
    if (selectedSection && skill) {
      setSkills((prevSkills) => ({
        ...prevSkills,
        [selectedSection]: [...prevSkills[selectedSection], skill],
      }));
      setSkill("");
      closeModal();
    }
};


  return (
    <Dialog
      open={modalType === "skillset" && isModalOpen}
      onOpenChange={closeModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add a skill</DialogTitle>
          <Select onValueChange={(value) => setSelectedSection(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Languages">Languages</SelectItem>
              <SelectItem value="Frameworks">Frameworks</SelectItem>
              <SelectItem value="Libraries">Libraries</SelectItem>
            </SelectContent>
          </Select>

          <Label>Skill</Label>
          <Input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          ></Input>
          <DialogDescription>
            This section allows you to add various skills you have, select a
            section then add skills relating to it. It is a good idea to add the
            ones youre most confident in first.
          </DialogDescription>
        </DialogHeader>
        <Button className="mt-2" onClick={saveSkill}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsDialog;
