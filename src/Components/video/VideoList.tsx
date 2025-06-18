import React from 'react';
import VideoCard from './VideoCard';
import type { Video } from '../../types';

interface VideoListProps {
  videos: Video[];
  layout?: 'grid' | 'row';
  className?: string;
}

const VideoList: React.FC<VideoListProps> = ({ videos, layout = 'grid', className = '' }) => {
  return (
    <div 
      className={`
        ${layout === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' 
          : 'flex flex-col gap-3'
        }
        ${className}
      `}
    >
      {videos.map(video => (
        <VideoCard key={video.id} video={video} layout={layout} />
      ))}
    </div>
  );
};

export default VideoList;
