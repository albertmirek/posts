import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PostsController } from './posts/controllers/posts.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PostsModule, CommentsModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(PostsController)
  }
}
