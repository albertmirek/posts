import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PostsController } from './modules/posts/controllers/posts.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import * as fs from 'node:fs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Post } from './modules/posts/entities/post.entity';

const configPath = process.env.CONFIG_PATH || './config.dev.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

@Module({
  imports: [
    PostsModule,
    CommentsModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      autoLoadEntities: true,
      synchronize: config.ENV === 'DEV',
      entities: [Post],
    }),
  ],
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
