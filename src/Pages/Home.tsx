import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import VideoList from '../Components/video/VideoList';
import CategoryFilter from '../Components/CategoryFilter';
import { videos } from '../Data/videos';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => video.tags?.includes(selectedCategory));

  return (
    <Layout>
      <div className="p-4">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <VideoList videos={filteredVideos} />
      </div>
    </Layout>
  );
};

export default Home;
