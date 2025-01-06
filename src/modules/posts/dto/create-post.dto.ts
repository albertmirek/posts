import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { ApiProperty } from '@nestjs/swagger';

export const createPostSchemaZodValidation = z.object({
  title: z
    .string()
    .nonempty('Title cannot be empty')
    .describe('The title of the post'),
  body: z
    .string()
    .nonempty('Body cannot be empty')
    .describe('The body of the post'),
  authorId: z
    .number()
    .positive('Author ID must be a positive number')
    .describe('The user ID of the post author'),
});

export class CreatePostDto extends createZodDto(createPostSchemaZodValidation) {
  @ApiProperty({ example: 'Post title', description: 'The title of the post' })
  title: string;

  @ApiProperty({ example: 'Post body', description: 'The body of the post' })
  body: string;

  @ApiProperty({
    example: 1,
    description: 'The user ID of the post author',
  })
  authorId: number;
}
