import React, { useEffect, useRef, useState } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, 
  Maximize, Minimize, SkipForward, 
  SkipBack, Settings, ChevronDown,
  Subtitles 
} from 'lucide-react';
import { formatDuration } from '@/lib/utils';

interface VideoPlayerProps {
  videoUrl: string;
  poster?: string;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoUrl, 
  poster,
  autoPlay = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hideControlsTimeout, setHideControlsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showCaptions, setShowCaptions] = useState(false);
  const [videoQuality, setVideoQuality] = useState("Auto");

  // Load video metadata
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoUrl]);

  // Auto-hide controls
  useEffect(() => {
    const startHideTimer = () => {
      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
      }
      
      if (isPlaying) {
        const timeout = setTimeout(() => {
          setShowControls(false);
        }, 3000);
        
        setHideControlsTimeout(timeout);
      }
    };
    
    startHideTimer();
    
    return () => {
      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
      }
    };
  }, [isPlaying, showControls]);

  // Update current time
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (video) video.currentTime = 0;
    };
    
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Play/Pause control
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    if (isPlaying) {
      video.play().catch(error => {
        console.error('Playback error:', error);
        setIsPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  // Volume control
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    video.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);
  
  // Playback rate control
  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;
    
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    
    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Listen to fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Progress bar control
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !videoRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Skip forward/backward
  const skip = (seconds: number) => {
    if (!videoRef.current) return;
    
    const newTime = Math.max(0, Math.min(videoRef.current.currentTime + seconds, duration));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Show controls
  const showControlsHandler = () => {
    setShowControls(true);
    
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
      
      if (isPlaying) {
        const timeout = setTimeout(() => {
          setShowControls(false);
        }, 3000);
        
        setHideControlsTimeout(timeout);
      }
    }
  };

  return (
    <div 
      ref={playerRef}
      className="relative w-full bg-black rounded-lg overflow-hidden group"
      onMouseMove={showControlsHandler}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        className="w-full h-full object-contain"
        autoPlay={autoPlay}
        onClick={(e) => e.stopPropagation()}
      />
      
      {/* Video control layer */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Central play/pause button */}
        <button
          className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-8 w-8" />
          ) : (
            <Play className="h-8 w-8" />
          )}
        </button>
        
        {/* Bottom control bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          {/* Progress bar */}
          <div 
            ref={progressRef}
            className="relative h-1 bg-white/30 rounded-full cursor-pointer mb-4"
            onClick={handleProgressClick}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-red-600 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Play/Pause */}
              <button
                className="text-white hover:text-white/80"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </button>
              
              {/* Skip back/forward */}
              <button
                className="text-white hover:text-white/80"
                onClick={() => skip(-10)}
              >
                <SkipBack className="h-5 w-5" />
              </button>
              
              <button
                className="text-white hover:text-white/80"
                onClick={() => skip(10)}
              >
                <SkipForward className="h-5 w-5" />
              </button>
              
              {/* Volume control */}
              <div className="flex items-center gap-2 relative group">
                <button
                  className="text-white hover:text-white/80"
                  onClick={toggleMute}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
                
                <div className="hidden sm:block">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-16 h-1 bg-white/30 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                  />
                </div>
              </div>
              
              {/* Time Display */}
              <div className="text-white text-sm hidden sm:block">
                {formatDuration(currentTime)} / {formatDuration(duration)}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Settings */}
              <div className="relative">
                <button 
                  className="text-white hover:text-white/80"
                  onClick={() => setShowSettings(!showSettings)}
                >
                  <Settings className={`h-5 w-5 ${showSettings ? 'text-blue-400' : ''}`} />
                </button>
                
                {showSettings && (
                  <div className="absolute right-0 bottom-12 bg-black/90 rounded-lg p-4 min-w-48 z-50">
                    {/* Quality settings */}
                    <div className="mb-4">
                      <p className="text-white text-sm mb-2">Quality</p>
                      <div className="flex flex-col gap-1">
                        {["Auto", "1080p", "720p", "480p", "360p"].map(quality => (
                          <button 
                            key={quality}
                            className={`text-left text-sm py-1 px-2 rounded ${videoQuality === quality ? 'bg-white/20 text-blue-400' : 'text-white hover:bg-white/10'}`}
                            onClick={() => setVideoQuality(quality)}
                          >
                            {quality}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Playback speed */}
                    <div className="mb-4">
                      <p className="text-white text-sm mb-2">Playback Speed</p>
                      <div className="flex flex-col gap-1">
                        {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(speed => (
                          <button 
                            key={speed}
                            className={`text-left text-sm py-1 px-2 rounded ${playbackRate === speed ? 'bg-white/20 text-blue-400' : 'text-white hover:bg-white/10'}`}
                            onClick={() => setPlaybackRate(speed)}
                          >
                            {speed === 1 ? 'Normal' : `${speed}x`}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Captions */}
                    <div>
                      <button 
                        className={`flex items-center gap-2 text-sm py-1 px-2 rounded w-full ${showCaptions ? 'bg-white/20 text-blue-400' : 'text-white hover:bg-white/10'}`}
                        onClick={() => setShowCaptions(!showCaptions)}
                      >
                        <Subtitles className="h-4 w-4" />
                        <span>Captions</span>
                        {showCaptions ? ' (On)' : ' (Off)'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Captions button */}
              <button
                className={`text-white hover:text-white/80 ${showCaptions ? 'text-blue-400' : ''}`}
                onClick={() => setShowCaptions(!showCaptions)}
              >
                <Subtitles className="h-5 w-5" />
              </button>
              
              {/* Fullscreen */}
              <button
                className="text-white hover:text-white/80"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? (
                  <Minimize className="h-5 w-5" />
                ) : (
                  <Maximize className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
