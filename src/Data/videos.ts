// Define types inline since '../types' is missing
export type Category = {
  id: string;
  name: string;
};

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  channel: string;
  channelAvatar: string;
  views: string;
  uploadTime: string;
  duration: string;
  description: string;
  tags: string[];
};

export const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'movies', name: 'Movies' },
  { id: 'animation', name: 'Animation' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'music', name: 'Music' },
  { id: 'coding', name: 'Coding' },
  { id: 'sports', name: 'Sports' },
  { id: 'news', name: 'News' },
  { id: 'education', name: 'Education' },
  { id: 'travel', name: 'Travel' },
  { id: 'food', name: 'Food' },
  { id: 'tech', name: 'Tech' },
  { id: 'comedy', name: 'Comedy' },
];

export const videos: Video[] = [
  {
    id: 'kungfupanda1',
    title: 'Kung Fu Panda: The Legend Begins',
    thumbnail: 'https://pub-cdn.sider.ai/u/U0GVHW2A63/web-coder/685254d0a5efb207b54e9350/resource/e966a3e0-d2bf-40ed-b819-0ae2c780fd0e.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    channel: 'DreamWorks Films',
    channelAvatar: 'https://pub-cdn.sider.ai/u/U0GVHW2A63/web-coder/685254d0a5efb207b54e9350/resource/d4167d49-6157-4dad-805a-cf2a68083106.jpg',
    views: '3.65M views',
    uploadTime: '2 weeks ago',
    duration: '10:35',
    description: 'Po embarks on his journey to become a kung fu master. Facing Tai Lung, he must overcome his fears and doubts to unlock his inner potential. This classic scene shows Po’s first challenge in the training ground.',
    tags: ['Movie', 'Animation', 'Kung Fu Panda']
  },
  {
    id: 'kungfupanda2',
    title: 'Kung Fu Panda: The Dragon Warrior’s Ultimate Skills',
    thumbnail: 'https://pub-cdn.sider.ai/u/U0GVHW2A63/web-coder/685254d0a5efb207b54e9350/resource/df9a0111-d06e-4b02-a01b-2e4da82a7bfc.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    channel: 'DreamWorks Films',
    channelAvatar: 'https://pub-cdn.sider.ai/u/U0GVHW2A63/web-coder/685254d0a5efb207b54e9350/resource/d4167d49-6157-4dad-805a-cf2a68083106.jpg',
    views: '2.83M views',
    uploadTime: '1 month ago',
    duration: '8:47',
    description: 'This exciting clip shows Po mastering his ultimate move and facing Tai Lung in a climactic battle. Po demonstrates the true essence of kung fu, showcasing the charm of Eastern martial arts.',
    tags: ['Movie', 'Animation', 'Kung Fu Panda']
  },
  {
    id: 'kungfupanda3',
    title: 'Kung Fu Panda: Classic Battles of the Furious Five',
    thumbnail: 'https://pub-cdn.sider.ai/u/U0GVHW2A63/web-coder/685254d0a5efb207b54e9350/resource/5ec755b7-33b7-4426-bb3b-34aa30557191.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    channel: 'DreamWorks Films',
    channelAvatar: 'https://pub-cdn.sider.ai/u/U0GVHW2A63/web-coder/685254d0a5efb207b54e9350/resource/d4167d49-6157-4dad-805a-cf2a68083106.jpg',
    views: '1.96M views',
    uploadTime: '3 weeks ago',
    duration: '7:22',
    description: 'A collection of the Furious Five’s amazing fight scenes in Kung Fu Panda. Monkey, Crane, Viper, Tigress, and Mantis each display their unique kung fu styles, perfectly interpreting the diversity of traditional Chinese martial arts.',
    tags: ['Movie', 'Animation', 'Kung Fu Panda', 'Furious Five']
  },
  {
    id: 'video1',
    title: 'Astonishing Ocean Creatures Exploration',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/ee49e4fe-df09-437f-9fdf-c3a37c85e027.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    channel: 'Nature Explorer',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/c9491e13-4908-4260-8cca-cb547519614c.jpg',
    views: '1.2M views',
    uploadTime: '3 months ago',
    duration: '8:24',
    description: 'Explore the mysterious creatures of the deep ocean. This video takes you through the breathtaking landscapes and unique creatures of the underwater world.',
    tags: ['Nature', 'Ocean', 'Science']
  },
  {
    id: 'video2',
    title: 'Most Popular Programming Languages in 2025',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/9e8f407a-5a68-4231-be73-54be60d79913.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    channel: 'Coding Academy',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/8687aff0-4bff-4ce9-9dfb-24099abf61e7.jpg',
    views: '890K views',
    uploadTime: '1 month ago',
    duration: '15:42',
    description: 'This video provides an in-depth analysis of the most popular programming languages in 2025, helping programmers plan their career paths.',
    tags: ['Coding', 'Tech', 'Career']
  },
  {
    id: 'video3',
    title: 'Urban Skyscraper Aerial Photography',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/11174631-0f8f-4153-be4e-d4cfc658768c.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    channel: 'City Aerials',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/14ef64a5-e17e-4cc4-bf20-b099143e2bcd.jpg',
    views: '450K views',
    uploadTime: '2 weeks ago',
    duration: '6:18',
    description: 'Stunning modern cityscapes from an aerial perspective, appreciating the beauty of urban architecture.',
    tags: ['City', 'Aerial', 'Architecture']
  },
  {
    id: 'video4',
    title: 'Healthy Breakfast Recipes Collection',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/db3919ed-3234-4eb9-9785-ed8e0b95a9f6.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    channel: 'Gourmet Chef',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/025add94-e86f-4af5-bdbe-41c3d48740c9.jpg',
    views: '760K views',
    uploadTime: '1 month ago',
    duration: '12:05',
    description: '10 simple, nutritious, and healthy breakfast recipes to start your day right.',
    tags: ['Food', 'Health', 'Recipe']
  },
  {
    id: 'video5',
    title: 'Game Live: Fantasy World Adventure',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/176bc37c-619b-4406-b29f-1d6ca24f61de.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    channel: 'Game Master',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/64fe95cb-c8b3-42ff-935f-086b36115c34.jpg',
    views: '920K views',
    uploadTime: '5 days ago',
    duration: '25:17',
    description: 'The latest game live, exploring a mysterious fantasy world and challenging powerful enemies.',
    tags: ['Game', 'Live', 'Adventure']
  },
  {
    id: 'video6',
    title: 'Japan Travel Guide 2025',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/efcf40f5-4724-4499-b8d9-5d5e8c84bac8.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    channel: 'Global Travel',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/2242e703-b3aa-4ca3-84a4-ec1910beadd6.jpg',
    views: '650K views',
    uploadTime: '2 months ago',
    duration: '18:32',
    description: 'Best travel routes and attractions in Japan for 2025, including transportation, accommodation, and food guides.',
    tags: ['Travel', 'Japan', 'Guide']
  },
  {
    id: 'video7',
    title: 'Complete Yoga Tutorial for Beginners',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/317ee06c-3cee-45f1-a0fd-6d1316e4885c.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    channel: 'Healthy Life',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/435409d9-76f5-42f8-91ac-203f8ae3ea0f.jpg',
    views: '1.03M views',
    uploadTime: '4 months ago',
    duration: '32:45',
    description: 'A yoga tutorial designed for beginners, teaching you basic yoga moves step by step.',
    tags: ['Fitness', 'Yoga', 'Health']
  },
  {
    id: 'video8',
    title: 'In-depth Analysis of AI Development',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/294a91ca-a8ac-4554-82d6-563bfaacd932.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    channel: 'Tech Frontier',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/bf1458be-13dc-479f-8e07-e134dd889ab3.jpg',
    views: '1.18M views',
    uploadTime: '3 weeks ago',
    duration: '22:14',
    description: 'A deep dive into the latest developments and future trends in AI technology, exploring the impact of AI on society.',
    tags: ['AI', 'Tech', 'Future']
  },
  {
    id: 'video9',
    title: 'Classic Piano Performances Collection',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/ccfa97a3-e2e3-41ec-882b-720751458713.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    channel: 'Classical Music',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/42296a8f-feac-49ab-8075-485552551ac7.jpg',
    views: '560K views',
    uploadTime: '2 months ago',
    duration: '28:39',
    description: 'A collection of classic piano pieces performed by renowned pianists, letting you experience the charm of classical music.',
    tags: ['Music', 'Piano', 'Classical']
  },
  {
    id: 'video10',
    title: 'Space Exploration: Latest Mars Mission',
    thumbnail: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/d07ff5f0-d872-4559-9fb7-f030816d97b6.jpg',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    channel: 'Space Science',
    channelAvatar: 'https://pub-cdn.wisebox.ai/u/U0BGVHO7LB/web-coder/68410fcf98a04ddfd9e97833/resource/5d33d056-1050-4307-861b-a34c532138ed.jpg',
    views: '1.42M views',
    uploadTime: '1 month ago',
    duration: '17:28',
    description: 'A detailed analysis of the latest Mars exploration mission, revealing the latest progress in humanity’s exploration of the Red Planet.',
    tags: ['Space', 'Science', 'Mars']
  }
];

export const getRelatedVideos = (currentVideoId: string): Video[] => {
  // 排除当前视频，返回其他视频作为相关推荐
  return videos.filter(video => video.id !== currentVideoId);
};

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};
