import { Module } from '@nestjs/common';
import { PostController } from './controllers/posts.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostsModule {}
