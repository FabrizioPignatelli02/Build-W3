export interface PostComment {
  id: number;
  body: string;
  postId: number;
  userId: number;
  user: {
    name: string;
  };
}
