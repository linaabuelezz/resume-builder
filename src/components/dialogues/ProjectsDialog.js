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
import { useContext, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ResumeContext } from "@/hooks/ResumeContext";
import { DialogueContext } from "@/hooks/DialogueContext";
import { v4 as uuidv4 } from 'uuid';

const ProjectsDialog = () => {
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const { setProjects, projects, projectToEdit, setProjectToEdit } = useContext(ResumeContext);
  const [projectName, setProjectName] = useState("");
  const [descriptionPoints, setDescriptionPoints] = useState([""]);
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const years = Array.from(new Array(100), (_, index) => (new Date().getFullYear() - index).toString());
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  useEffect(() => {
    if (projectToEdit) {
      setProjectName(projectToEdit.projectName || "");
      setDescriptionPoints(projectToEdit.projectPoints || [""]);
      const [startMonth, startYear] = projectToEdit.startDate.split(" ");
      setStartMonth(startMonth || "");
      setStartYear(startYear || "");
      const [endMonth, endYear] = projectToEdit.endDate.split(" ");
      setEndMonth(endMonth || "");
      setEndYear(endYear || "");
    }
  }, [projectToEdit]);

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
      id: projectToEdit?.id || uuidv4(),
      projectName,
      startDate: `${startMonth} ${startYear}`,
      endDate: `${endMonth} ${endYear}`,
      projectPoints: descriptionPoints.filter(point => point.trim() !== ""),
    };

    if (projectToEdit) {
      // Edit existing project
      setProjects(projects.map(project => project.id === newProject.id ? newProject : project));
    } else {
      // Add new project
      if (projects.length === 1 && projects[0].projectName === "Default Project") {
        setProjects([newProject]);
      } else {
        setProjects([...projects, newProject]);
      }
    }

    closeModal();
    setProjectName("");
    setDescriptionPoints([""]);
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setProjectToEdit(null);
  };

  return (
    <Dialog open={modalType === "projects" && isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">{projectToEdit ? "Edit Project" : "Add a Project"}</DialogTitle>
          <Label>Project Name</Label>
          <Input value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          
          <Label>Start Date</Label>
          <div className="flex space-x-2">
            <Select value={startMonth} onValueChange={setStartMonth} className="flex-grow">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem key={index} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={startYear} onValueChange={setStartYear} className="flex-grow">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year, index) => (
                  <SelectItem key={index} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Label>End Date</Label>
          <div className="flex space-x-2">
            <Select value={endMonth} onValueChange={setEndMonth} className="flex-grow">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month, index) => (
                  <SelectItem key={index} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={endYear} onValueChange={setEndYear} className="flex-grow">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year, index) => (
                  <SelectItem key={index} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Label>Project Description Points</Label>
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
