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

const CDN_URL = 'https://cdn.brandfetch.io/';

const SocialLinksDialog = () => {
  const { socialLinks, setSocialLinks } = useContext(ResumeContext);
  const { isModalOpen, closeModal, modalType } = useContext(DialogueContext);
  const [link, setLink] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const getDomainFromUrl = (url) => {
    try {
      const hostname = new URL(url).hostname;
      return hostname.split('.').slice(-2).join('.'); 
    } catch (error) {
      console.error('Invalid URL');
      return '';
    }
  };
  

  const fetchLogo = (url) => {
    const domain = getDomainFromUrl(url);
    if (domain) {
      return `${CDN_URL}${domain}`;
    }
    return '';
  };

  const saveLink = () => {
    const logo = fetchLogo(link);
    setSocialLinks([...socialLinks, { link, logo }]);
    setLink("");
    setLogoUrl("");
    closeModal();
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    setLogoUrl(fetchLogo(e.target.value));
  };

  return (
    <Dialog
      open={modalType === "sociallinks" && isModalOpen}
      onOpenChange={closeModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Add a social link</DialogTitle>
          <Label>Link</Label>
          <div className="flex align-middle gap-2">           
          <Input className="mt-3" value={link} onChange={handleLinkChange} placeholder="Enter the social link" />
          {logoUrl && <img src={logoUrl} alt="Company Logo" className="" style={{ maxWidth: '60px', maxHeight: '60px' }} />}
          </div>
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
