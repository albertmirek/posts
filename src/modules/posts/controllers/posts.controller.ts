import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { PostService } from '../post.service';
import { Post as PostEntity } from '../entities/post.entity';
import { CreatePostDto, createPostSchema, GetPostDto } from '../dto/post.dto';
import { ZodValidationPipe } from '../../../common/pipes/zodValidationPipeline';
import { AuthGuard } from '../../../common/guards/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}

  //@UseGuards(AuthGuard) //TODO commented due to dev reasons
  @Post()
  @UsePipes(new ZodValidationPipe(createPostSchema))
  async create(@Body() createPostDto: CreatePostDto) {
    try {
      return this.postService.create(createPostDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Get()
  async findAll(): Promise<GetPostDto[]> {
    try {
      const posts: GetPostDto[] = (await this.postService.findAll()).map(
        (post) => {
          return {
            authorId: post.authorId,
            authorName: post.author.userName,
            title: post.title,
            body: post.body,
            createdAt: post.createdAt,
            comments: post.comments,
          };
        },
      );

      return posts;
    } catch (error) {
      throw new Error(error);
      /*throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );*/
    }
  }

  /*  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findOne(id);
  }*/
}
