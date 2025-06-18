import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Layout from '../Components/Layout/Layout';
import VideoList from '../Components/video/VideoList';
import { videos } from '../Data/videos';
import { Video } from '../types';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search_query') || '';
    setSearchQuery(query);
    
    if (query) {
      const results = videos.filter(video => {
        const queryLower = query.toLowerCase();
        return (
          video.title.toLowerCase().includes(queryLower) ||
          video.description?.toLowerCase().includes(queryLower) ||
          video.channel.toLowerCase().includes(queryLower) ||
          video.tags?.some(tag => tag.toLowerCase().includes(queryLower))
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [location.search]);

  return (
    <Layout>
      <div className="p-4">
        {searchQuery ? (
          <>
            <h1 className="text-xl font-medium mb-6">
              Search results for "{searchQuery}"
            </h1>
            {searchResults.length > 0 ? (
              <VideoList videos={searchResults} layout="row" />
            ) : (
              <div className="text-center py-12">
                <h2 className="text-lg font-medium mb-2">No results found</h2>
                <p className="text-muted-foreground">
                  Try different keywords or check your spelling
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-lg font-medium">Please enter a search term</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
