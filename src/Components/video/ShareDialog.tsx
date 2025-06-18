import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { Check, Copy, Facebook, Twitter, Linkedin, Mail, Link2 } from 'lucide-react';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle: string;
  videoId: string;
}

const ShareDialog: React.FC<ShareDialogProps> = ({
  isOpen,
  onClose,
  videoTitle,
  videoId
}) => {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = `${window.location.origin}/#/watch/${videoId}`;
  
  const shareOptions = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      color: 'bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      color: 'bg-sky-500',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(videoTitle)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'bg-blue-700',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      color: 'bg-gray-600',
      url: `mailto:?subject=${encodeURIComponent(videoTitle)}&body=${encodeURIComponent(shareUrl)}`
    }
  ];
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const handleShareClick = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Video</DialogTitle>
          <DialogDescription>
            Share this video with your friends and social network
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center gap-4 py-6">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              className={`${option.color} text-white p-3 rounded-full hover:opacity-90`}
              onClick={() => handleShareClick(option.url)}
            >
              {option.icon}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="w-full p-2 pr-10 border rounded-md bg-secondary"
            />
          </div>
          <Button
            onClick={copyToClipboard}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground mt-2">
          By sharing, you agree to the terms and conditions
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
