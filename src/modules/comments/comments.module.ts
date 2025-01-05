import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './comments.service';

import { PostsModule } from '../posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Comment } from './entities/comment.entity';

@Module({
  imports: [PostsModule, TypeOrmModule.forFeature([Comment])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
