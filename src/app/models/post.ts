import { PostComment } from './comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: PostComment[];
  poster?: string;
  like: number;
  views: number;
  user: {
    name: string;
  };
}
