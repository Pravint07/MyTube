import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/UI/dialog";
import { Button } from '../UI/button';

interface DownloadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  videoTitle: string;
}

const DownloadDialog: React.FC<DownloadDialogProps> = ({
  isOpen,
  onClose,
  videoUrl,
  videoTitle,
}) => {
  const handleDownload = (quality: string) => {
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = videoUrl;
    anchor.download = `${videoTitle.replace(/[^\w\s]/gi, '')}_${quality}.mp4`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    
    // Close the dialog after download starts
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Video</DialogTitle>
          <DialogDescription>
            Select your preferred video quality to download
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button 
            onClick={() => handleDownload("1080p")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            1080p (HD)
          </Button>
          <Button 
            onClick={() => handleDownload("720p")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            720p (HD)
          </Button>
          <Button 
            onClick={() => handleDownload("480p")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            480p (SD)
          </Button>
          <Button 
            onClick={() => handleDownload("360p")}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            360p (Low)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
