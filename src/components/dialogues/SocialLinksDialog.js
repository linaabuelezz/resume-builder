import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogueContext } from "@/hooks/DialogueContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResumeContext } from "@/hooks/ResumeContext";

const SocialLinksDialog = () => {
  const { socialLinks, setSocialLinks } = useContext(ResumeContext)
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const [link, setLink] = useState("");

  const saveLink = () => {
    setSocialLinks([...socialLinks, link]);
    setLink("");
    closeModal();
  }

  return (
    <Dialog
      open={modalType === "sociallinks" && isModalOpen}
      onOpenChange={closeModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add a social link</DialogTitle>
          <Label>Link</Label>
          <Input value={link} onChange={(e) => setLink(e.target.value)}></Input>
          <DialogDescription>
            This section allows you to provide links to some of your social
            profiles. It is a good idea to add Github and LinkedIn.
          </DialogDescription>
        </DialogHeader>
        <Button className="mt-2" onClick={saveLink}>Save</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SocialLinksDialog;
