import { z } from 'zod';
import { Comment } from '../../comments/entities/comment.entity';

export const createPostSchema = z
  .object({
    title: z.string(),
    body: z.string(),
    authorId: z.number(),
  })
  .required();

export type CreatePostDto = z.infer<typeof createPostSchema>;

export type GetPostDto = {
  title: string;
  body: string;
  authorId: number;
  authorName: string;
  createdAt: Date;
  comments?: Comment[];
};
