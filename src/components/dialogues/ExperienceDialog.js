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
import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ResumeContext } from "@/hooks/ResumeContext";
import { DialogueContext } from "@/hooks/DialogueContext";

const ExperienceDialog = () => {
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const { setExperience, experiences } = useContext(ResumeContext);
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [descriptionPoints, setDescriptionPoints] = useState([""]);

  const years = Array.from(new Array(100), (val, index) =>
    (new Date().getFullYear() - index).toString()
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

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
      companyName,
      jobPosition,
      experiencePoints: descriptionPoints.filter(
        (point) => point.trim() !== ""
      ),
      startDate: `${startMonth} ${startYear}`,
      endDate: `${endMonth} ${endYear}`,
    };

    if (
      experiences.length === 1 &&
      experiences[0].companyName === "Company name"
    ) {
      setExperience([newExperience]);
    } else {
      setExperience([...experiences, newExperience]);
    }

    closeModal();
    setCompanyName("");
    setJobPosition("");
    setStartMonth("");
    setStartYear("");
    setEndMonth("");
    setEndYear("");
    setDescriptionPoints([""]);
  };

  return (
    <Dialog open={modalType === "experience" && isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add an experience</DialogTitle>
          <Label>Company name</Label>
          <Input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <Label>Job position</Label>
          <Input
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
          />
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
            This will be added under the experience section of your resume. Each
            point should describe your project in some way. It is a good idea to
            use numbers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceDialog;
