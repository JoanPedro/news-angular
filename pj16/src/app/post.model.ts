export type Post = {
  content: string;
  title: string;
  id?: string;
};

export type PostCollection = {
  posts: Array<Post>;
};
