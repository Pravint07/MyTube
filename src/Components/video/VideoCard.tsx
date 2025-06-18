import React from 'react';
import { Link } from 'react-router';
import type { Video } from '../../types';

interface VideoCardProps {
  video: Video;
  layout?: 'grid' | 'row';
}

const VideoCard: React.FC<VideoCardProps> = ({ video, layout = 'grid' }) => {
  const isGrid = layout === 'grid';

  return (
    <div className={`group ${isGrid ? 'w-full' : 'flex gap-3 w-full'}`}>
      <Link 
        to={`/watch/${video.id}`} 
        className={`block relative ${isGrid ? 'w-full aspect-video' : 'w-40 h-24 flex-shrink-0'}`}
      >
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </Link>
      
      <div className={`${isGrid ? 'flex mt-3' : ''}`}>
        {isGrid && (
          <Link to={`/channel/${video.channel}`} className="mr-3 flex-shrink-0">
            <img 
              src={video.channelAvatar} 
              alt={video.channel} 
              className="object-cover w-9 h-9 rounded-full"
            />
          </Link>
        )}
        
        <div className="flex-1 min-w-0">
          <Link to={`/watch/${video.id}`} className="block">
            <h3 
              className={`font-medium text-foreground line-clamp-2 ${isGrid ? 'text-sm' : 'text-xs'}`}
            >
              {video.title}
            </h3>
          </Link>
          
          <Link 
            to={`/channel/${video.channel}`}
            className="text-muted-foreground text-xs mt-1 hover:text-foreground"
          >
            {video.channel}
          </Link>
          
          <div className="text-muted-foreground text-xs mt-0.5">
            <span>{video.views}</span>
            <span className="mx-1">•</span>
            <span>{video.uploadTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
