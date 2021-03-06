export type FeedItem = {
  id: string;
  author: string;
  content: string;
  contentSnippet: string;
  isoDate: string;
  link: string;
  title: string;
  pubDate: string;
};

export type Feed = {
  feedUrl: string;
  link: string;
  title: string;
  lastBuildDate: string;
  items: FeedItem[];
};

export type CMSData = {
  id: string;
  date: string;
  title: string;
  description: string;
  content: string;
  mediaType: string[];
};

export type Post = {
  id: string;
  type: 'Feed' | 'CMS';
  title: string;
  description?: string;
  content?: string;
  createdAt: Date | number;
  link?: string;
};
