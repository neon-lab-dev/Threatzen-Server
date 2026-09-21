export type TBlog = {
  imageUrl: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  readTime: string;
  content: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
};