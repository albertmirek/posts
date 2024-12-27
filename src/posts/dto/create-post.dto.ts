import { z } from 'zod';

/*export interface CreatePostDto {
  title: string;
  body: string;
  authorId: number;
  createdAt: Date;
}*/

export const createPostSchema = z
  .object({
    title: z.string(),
    age: z.string(),
    authorId: z.number(),
    createdAt: z.date().optional(),
  })
  .required();

export type CreatePostDto = z.infer<typeof createPostSchema>;
