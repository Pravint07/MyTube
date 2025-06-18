import React, { useState } from 'react';
import { Link } from 'react-router';
import { Search, Bell, User, X, Mic, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with query
      window.location.href = `/#/results?search_query=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border h-14 px-4">
      <div className="flex items-center justify-between h-full">
        {/* 左侧部分 */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="mr-2 bg-transparent border-none p-2 rounded-full hover:bg-gray-200"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="flex items-center">
            <div className="font-bold text-lg">MyTube</div>
          </Link>
        </div>

        {/* 中间搜索栏 - 桌面端显示 */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full"
          >
            <div className="relative flex flex-1">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-secondary rounded-l-full border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 bg-accent rounded-r-full border border-l-0 border-border hover:bg-accent/90"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
          <button className="ml-2 bg-transparent border-none p-2 rounded-full hover:bg-gray-200">
            <Mic className="h-5 w-5" />
          </button>
        </div>

        {/* 移动端搜索按钮 */}
        <div className="flex md:hidden">
          {showSearchBar ? (
            <div className="absolute inset-0 bg-background flex items-center px-4 h-14">
              <button className="bg-transparent border-none p-2 rounded-full hover:bg-gray-200" onClick={toggleSearchBar}>
                <X className="h-5 w-5" />
              </button>
              <form
                onSubmit={handleSearchSubmit}
                className="flex flex-1 mx-2"
              >
                <input
                  type="text"
                  placeholder="搜索"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 bg-secondary rounded-l-full border border-border focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 bg-accent rounded-r-full border border-l-0 border-border"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
              <button className="bg-transparent border-none p-2 rounded-full hover:bg-gray-200">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button className="bg-transparent border-none p-2 rounded-full hover:bg-gray-200" onClick={toggleSearchBar}>
              <Search className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* 右侧图标 */}
        <div className="flex items-center">
          <button className="hidden sm:flex bg-transparent border-none p-2 rounded-full hover:bg-gray-200">
            <Bell className="h-5 w-5" />
          </button>
          <button className="ml-2 bg-transparent border-none p-2 rounded-full hover:bg-gray-200">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;