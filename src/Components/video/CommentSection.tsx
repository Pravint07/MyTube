import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '../ui/button';

interface Comment {
  id: number;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

interface CommentSectionProps {
  videoId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ videoId }) => {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      username: 'Username1',
      avatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/afcace6c-faff-4d13-b59e-f96fd075f7e3.jpg',
      content: 'This is an example comment with great content. This video is really awesome, I learned so much!',
      timestamp: '1 day ago',
      likes: 21
    },
    {
      id: 2,
      username: 'Username2',
      avatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/afcace6c-faff-4d13-b59e-f96fd075f7e3.jpg',
      content: "This video has amazing production quality! I have been following this channel for years and the content keeps getting better.",
      timestamp: '2 days ago',
      likes: 42
    },
    {
      id: 3,
      username: 'Username3',
      avatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/afcace6c-faff-4d13-b59e-f96fd075f7e3.jpg',
      content: 'The part at 2:45 was absolutely mind-blowing. I had to rewatch it several times to catch all the details!',
      timestamp: '3 days ago',
      likes: 63
    }
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim()) {
      const newComment: Comment = {
        id: Date.now(),
        username: 'Current User',
        avatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/303cfd46-42f7-4db0-9298-fb63dbff01b2.jpg',
        content: commentInput,
        timestamp: 'Just now',
        likes: 0
      };
      
      setComments([newComment, ...comments]);
      setCommentInput('');
    }
  };

  const toggleLike = (commentId: number) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        const isLiked = comment.isLiked || false;
        return {
          ...comment,
          isLiked: !isLiked,
          likes: isLiked ? comment.likes - 1 : comment.likes + 1
        };
      }
      return comment;
    }));
  };

  return (
    <div className="mt-6">
      <h3 className="font-medium mb-4">Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmitComment}>
        <div className="flex items-start mb-6">
          <img 
            src="https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/303cfd46-42f7-4db0-9298-fb63dbff01b2.jpg" 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)} 
              className="w-full bg-transparent border-b border-border pb-1 focus:outline-none focus:border-primary"
            />
            
            {commentInput && (
              <div className="flex justify-end mt-2 space-x-2">
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={() => setCommentInput('')}
                  className="text-sm"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                >
                  Comment
                </Button>
              </div>
            )}
          </div>
        </div>
      </form>
      
      {comments.map(comment => (
        <div key={comment.id} className="flex mb-6">
          <img 
            src={comment.avatar} 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
          />
          <div>
            <div className="flex items-center">
              <span className="font-medium">{comment.username}</span>
              <span className="text-xs text-muted-foreground ml-2">{comment.timestamp}</span>
            </div>
            <p className="mt-1 text-sm">
              {comment.content}
            </p>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <button 
                className={`flex items-center mr-4 ${comment.isLiked ? 'text-blue-500' : ''}`}
                onClick={() => toggleLike(comment.id)}
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{comment.likes}</span>
              </button>
              <button className="flex items-center mr-4">
                <ThumbsDown className="h-4 w-4" />
              </button>
              <button className="mr-4">Reply</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
