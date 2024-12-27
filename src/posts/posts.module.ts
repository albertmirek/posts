import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostService } from './post.service';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  exports: [PostService],
})
export class PostsModule {}
