import { z } from 'zod';


export const createCommentSchema = z
  .object({
    //title: z.string(),
    //body: z.string(),
    //authorId: z.number(),
    authorId: z.number(),
    postId: z.number(),
    text: z.string(),
  })
  .required();

export type CreateCommentDto = z.infer<typeof createCommentSchema>;
