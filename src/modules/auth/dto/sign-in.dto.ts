import { z } from 'zod';


export const signInSchema = z
  .object({
    username: z.string(),
    password: z.string(),
  })
  .required();

export type SignInDto = z.infer<typeof signInSchema>;
