import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { PostService } from '../post.service';
import { Post as PostEntity } from '../entities/post.entity';
import { ZodValidationPipe } from '../../../common/pipes/zodValidationPipeline';
import {
  CreatePostDto,
  createPostSchemaZodValidation,
} from '../dto/create-post.dto';
import { GetPostsDto } from '../dto/get-posts.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

export type GetPosts = Omit<PostEntity, 'author'>[];

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}

  //@UseGuards(AuthGuard) //TODO commented due to dev reasons
  @Post()
  @UsePipes(new ZodValidationPipe(createPostSchemaZodValidation)) // Validates input against Zod schema
  @ApiBody({ type: CreatePostDto }) // Swagger documentation
  async create(@Body() createPostDto: CreatePostDto) {
    try {
      return await this.postService.create(createPostDto);
    } catch (error) {
      throw new HttpException(
        `Error creating post: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiResponse({ type: GetPostsDto, isArray: true })
  async findAll(): Promise<GetPostsDto[]> {
    try {
      return (await this.postService.findAll()).map((post) => {
        return {
          id: post.id,
          authorId: post.authorId,
          authorName: post.author.userName,
          title: post.title,
          body: post.body,
          createdAt: post.createdAt,
          comments: post.comments,
        };
      });
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
