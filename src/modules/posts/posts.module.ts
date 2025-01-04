import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  exports: [PostService],
  imports: [TypeOrmModule.forFeature([Post])],
})
export class PostsModule {}
