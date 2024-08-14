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
import { useContext } from "react";

const SocialLinksDialog = () => {
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  console.log(modalType, isModalOpen);

  return (
    <Dialog open={modalType === "sociallinks" && isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add a social link</DialogTitle>
          <Label>Link</Label>
          <Input></Input>
          <DialogDescription>
            This section allows you to provide links to some of your social profiles. It is a good idea to add Github and LinkedIn.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SocialLinksDialog;
