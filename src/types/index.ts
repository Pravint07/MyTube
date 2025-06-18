export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  channel: string;
  channelAvatar: string;
  views: string;
  uploadTime: string;
  duration: string;
  description?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
}
