"use client";
import { ResumeProvider } from "@/hooks/ResumeContext";
import Resume from "@/components/ResumePage";
import InformationInputBox from "@/components/InformationInputBox";
import { DialogueProvider } from "@/hooks/DialogueContext";
import SocialLinksDialog from "@/components/dialogues/SocialLinksDialog";
import ExperienceDialog from "@/components/dialogues/ExperienceDialog"
import ProjectsDialog from "@/components/dialogues/ProjectsDialog";

export default function Home() {
  return (
    <DialogueProvider>
      <ResumeProvider>
        <div className="container">
          <div className="left">
            <Resume />
          </div>
          <div className="right">
            <SocialLinksDialog />
            <ExperienceDialog />
            <ProjectsDialog />
            <InformationInputBox />
          </div>
        </div>
      </ResumeProvider>
    </DialogueProvider>
  );
}
