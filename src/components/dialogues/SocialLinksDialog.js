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
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResumeContext } from "@/hooks/ResumeContext";
import { v4 as uuidv4 } from "uuid";

const CDN_URL = "https://cdn.brandfetch.io/";

const SocialLinksDialog = () => {
  const { socialLinks, setSocialLinks, socialLinkToEdit } =
    useContext(ResumeContext);
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const [link, setLink] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  // Function to extract domain from URL
  const getDomainFromUrl = (url) => {
    try {
      const hostname = new URL(url).hostname;
      return hostname.split(".").slice(-2).join(".");
    } catch (error) {
      console.error("Invalid URL");
      return "";
    }
  };

  // Function to fetch logo based on URL
  const fetchLogo = (url) => {
    const domain = getDomainFromUrl(url);
    if (domain) {
      return `${CDN_URL}${domain}`;
    }
    return "";
  };

  // Save or update the link
  const saveLink = () => {
    const logo = fetchLogo(link);
    const newLink = {
      id: socialLinkToEdit?.id || uuidv4(), // Use existing id if editing, otherwise generate new
      link,
      logo: logo || "",
    };

    if (socialLinkToEdit) {
      // Update existing link
      setSocialLinks(
        socialLinks.map((l) => (l.id === newLink.id ? newLink : l))
      );
    } else {
      // Add new link
      setSocialLinks([...socialLinks, newLink]);
    }

    // Reset state and close modal
    closeModal();
    setLink("");
    setLogoUrl("");
  };

  // Handle input changes and fetch logo dynamically
  const handleLinkChange = (e) => {
    setLink(e.target.value);
    setLogoUrl(fetchLogo(e.target.value));
  };

  // Populate form fields when editing
  useEffect(() => {
    if (socialLinkToEdit) {
      setLink(socialLinkToEdit.link || "");
      setLogoUrl(socialLinkToEdit.logo || "");
    }
  }, [socialLinkToEdit]);

  return (
    <Dialog
      open={modalType === "sociallinks" && isModalOpen}
      onOpenChange={closeModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">
            {socialLinkToEdit ? "Edit Social Link" : "Add a Social Link"}
          </DialogTitle>
          <Label>Link</Label>
          <div className="flex align-middle gap-2">
            <Input
              className="mt-3"
              value={link}
              onChange={handleLinkChange}
              placeholder="Enter the social link"
            />
            {logoUrl && (
              <img
                src={logoUrl}
                alt="Company Logo"
                className=""
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
            )}
          </div>
          <DialogDescription>
            This section allows you to provide links to some of your social
            profiles. It is a good idea to add GitHub and LinkedIn.
          </DialogDescription>
        </DialogHeader>
        <Button className="mt-2" onClick={saveLink}>
          {socialLinkToEdit ? "Update" : "Save"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SocialLinksDialog;
