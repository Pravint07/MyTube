import React from 'react';
import { Link } from 'react-router';
import { Home, Flame, Clock, ThumbsUp, Play, History, Film, Music, Gamepad2, Newspaper, Lightbulb, Award } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const mainLinks = [
    { icon: <Home className="h-5 w-5" />, text: 'Home', path: '/' },
    { icon: <Flame className="h-5 w-5" />, text: 'Trending', path: '/trending' },
    { icon: <Play className="h-5 w-5" />, text: 'Subscriptions', path: '/subscriptions' },
  ];

  const libraryLinks = [
    { icon: <History className="h-5 w-5" />, text: 'History', path: '/history' },
    { icon: <Clock className="h-5 w-5" />, text: 'Watch Later', path: '/watch-later' },
    { icon: <ThumbsUp className="h-5 w-5" />, text: 'Liked Videos', path: '/liked-videos' },
  ];

  const explorationLinks = [
    { icon: <Film className="h-5 w-5" />, text: 'Movies', path: '/films' },
    { icon: <Music className="h-5 w-5" />, text: 'Music', path: '/music' },
    { icon: <Gamepad2 className="h-5 w-5" />, text: 'Gaming', path: '/gaming' },
    { icon: <Newspaper className="h-5 w-5" />, text: 'News', path: '/news' },
    { icon: <Lightbulb className="h-5 w-5" />, text: 'Learning', path: '/learning' },
    { icon: <Award className="h-5 w-5" />, text: 'Sports', path: '/sports' },
  ];

  const renderLinks = (links: { icon: React.ReactNode; text: string; path: string }[]) => {
    return links.map((link, index) => (
      <Link
        key={index}
        to={link.path}
        className="flex items-center px-3 py-3 rounded-lg hover:bg-secondary group"
      >
        <span className="mr-6 text-foreground/70 group-hover:text-foreground">{link.icon}</span>
        <span className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-150`}>{link.text}</span>
      </Link>
    ));
  };

  return (
    <aside
      className={`fixed top-14 left-0 bottom-0 z-40 bg-background border-r border-border overflow-y-auto transition-all duration-300 ${
        isOpen ? 'w-56' : 'w-16'
      }`}
    >
      <div className="py-2">
        <div className="mb-2">{renderLinks(mainLinks)}</div>
        
        {isOpen && <div className="mx-3 mb-2 border-t border-border"></div>}
        
        <div className="mb-2">{renderLinks(libraryLinks)}</div>
        
        {isOpen && (
          <>
            <div className="mx-3 mb-2 border-t border-border"></div>
            <div className="px-3 py-2 text-sm font-medium">Explore</div>
          </>
        )}
        
        <div className="mb-2">{renderLinks(explorationLinks)}</div>
        
        {isOpen && (
          <>
            <div className="mx-3 mb-2 border-t border-border"></div>
            <div className="px-4 py-4 text-xs text-muted-foreground">
              <div className="mb-4 flex flex-wrap gap-x-2">
                <span>About</span>
                <span>Copyright</span>
                <span>Contact Us</span>
                <span>Creators</span>
                <span>Advertise</span>
                <span>Developers</span>
              </div>
              <div className="mb-4 flex flex-wrap gap-x-2">
                <span>Terms</span>
                <span>Privacy</span>
                <span>Policy & Safety</span>
                <span>Feedback</span>
              </div>
              <div>© 2025 MyTube</div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
