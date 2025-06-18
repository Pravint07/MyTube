import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { getVideoById, getRelatedVideos } from '../Data/videos';
import VideoPlayer from '../Components/video/VideoPlayer';
import VideoList from '../Components/video/VideoList';
import Layout from '../Components/Layout/Layout';
import DownloadDialog from '../Components/video/DownloadDialog';
import ShareDialog from '../Components/video/ShareDialog';
import CommentSection from '../Components/video/CommentSection';
import { ThumbsUp, ThumbsDown, Share2, Download, Bookmark, MoreHorizontal, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import type { Video } from '../types';

const VideoPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  const [isVideoLiked, setIsVideoLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(12500);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  useEffect(() => {
    if (videoId) {
      const videoData = getVideoById(videoId);
      if (videoData) {
        setVideo(videoData);
        setRelatedVideos(getRelatedVideos(videoId));
      }
    }
  }, [videoId]);

  if (!video) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-xl font-bold">Video Not Found</h2>
            <p className="mt-2">This video may have been removed or does not exist</p>
            <Button className="mt-4" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* 视频播放器 */}
          <VideoPlayer 
            videoUrl={video.videoUrl} 
            poster={video.thumbnail}
            autoPlay={true}
          />

          {/* 视频信息 */}
          <div className="mt-4">
            <h1 className="text-xl font-bold">{video.title}</h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
              <div className="flex items-center">
                <Link to={`/channel/${video.channel}`}>
                  <img 
                    src={video.channelAvatar} 
                    alt={video.channel} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </Link>
                <div className="ml-3">
                  <Link to={`/channel/${video.channel}`} className="font-medium hover:text-primary">
                    {video.channel}
                  </Link>
                  <div className="text-sm text-muted-foreground">1.2M subscribers</div>
                </div>
                <Button className="ml-4 rounded-full bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
              
              <div className="flex items-center space-x-1 mt-4 sm:mt-0">
                <div className="flex items-center rounded-full bg-secondary overflow-hidden">
                  <Button 
                  variant="ghost" 
                  className={`rounded-r-none h-9 px-4 flex items-center gap-2 ${isVideoLiked ? 'text-blue-500' : ''}`}
                  onClick={() => {
                    setIsVideoLiked(!isVideoLiked);
                    setLikeCount(prev => isVideoLiked ? prev - 1 : prev + 1);
                  }}
                >
                    <ThumbsUp className="h-5 w-5" />
                    <span>{(likeCount / 1000).toFixed(1)}K</span>
                  </Button>
                  <div className="h-6 w-px bg-border"></div>
                  <Button variant="ghost" className="rounded-l-none h-9 px-4">
                    <ThumbsDown className="h-5 w-5" />
                  </Button>
                </div>
                
                <Button 
                  variant="secondary" 
                  className="h-9 px-4 rounded-full flex items-center gap-2"
                  onClick={() => setIsShareDialogOpen(true)}
                >
                  <Share2 className="h-5 w-5" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
                
                {/* Share Dialog */}
                {video && (
                  <ShareDialog
                    isOpen={isShareDialogOpen}
                    onClose={() => setIsShareDialogOpen(false)}
                    videoTitle={video.title}
                    videoId={video.id}
                  />
                )}
                
                <Button 
                  variant="secondary" 
                  className="h-9 px-4 rounded-full flex items-center gap-2"
                  onClick={() => setIsDownloadDialogOpen(true)}
                >
                  <Download className="h-5 w-5" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                
                {/* Download Dialog */}
                {video && (
                  <DownloadDialog
                    isOpen={isDownloadDialogOpen}
                    onClose={() => setIsDownloadDialogOpen(false)}
                    videoUrl={video.videoUrl}
                    videoTitle={video.title}
                  />
                )}
                
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* 视频详情 */}
            <div 
              className="mt-4 p-3 bg-secondary rounded-lg"
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            >
              <div className="flex items-center text-sm mb-1">
                <span className="font-medium">{video.views}</span>
                <span className="mx-1">•</span>
                <span>{video.uploadTime}</span>
                {video.tags && video.tags.length > 0 && (
                  <>
                    <span className="mx-1">•</span>
                    <div className="flex flex-wrap gap-1">
                      {video.tags.map((tag, index) => (
                        <Link 
                          key={index} 
                          to={`/results?search_query=${tag}`}
                          className="text-blue-500 hover:text-blue-600"
                          onClick={(e) => e.stopPropagation()}
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className={`text-sm whitespace-pre-wrap ${isDescriptionExpanded ? '' : 'line-clamp-2'}`}>
                {video.description}
              </div>
              
              {video.description && video.description.length > 100 && (
                <button className="text-sm font-medium mt-1">
                  {isDescriptionExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
            
            {/* Comments Section */}
            {video && <CommentSection videoId={video.id} />}
          </div>
        </div>
        
        {/* 右侧推荐视频 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Button variant="secondary" className="text-sm px-3 py-1 h-8">All</Button>
            <Button variant="ghost" className="text-sm px-3 py-1 h-8">Related</Button>
            <Button variant="ghost" className="text-sm px-3 py-1 h-8 flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Watch Later
            </Button>
          </div>
          
          <VideoList videos={relatedVideos} layout="row" />
        </div>
      </div>
    </Layout>
  );
};

export default VideoPage;
