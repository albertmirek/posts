import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '../../comments/entities/comment.entity';

export class GetPostsDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 42 })
  authorId: number;

  @ApiProperty({ example: 'John Doe' })
  authorName: string;

  @ApiProperty({ example: 'Post Title' })
  title: string;

  @ApiProperty({ example: 'This is the post body.' })
  body: string;

  @ApiProperty({ example: '2024-01-06T12:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: [{ id: 1, text: 'Comment 1' }] })
  comments?: Comment[] | undefined;
}
