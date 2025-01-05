import { z } from 'zod';


export const createCommentSchema = z
  .object({
    authorId: z.number(),
    postId: z.number(),
    text: z.string(),
  })
  .required();

export type CreateCommentDto = z.infer<typeof createCommentSchema>;
