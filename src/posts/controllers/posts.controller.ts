import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus, Param, ParseIntPipe,
  Post, UsePipes,
} from '@nestjs/common';
import { PostService } from '../post.service';
import { Post as PostInterface } from '../interfaces/post.interface';
import { CreatePostDto, createPostSchema } from '../dto/create-post.dto';
import { ZodValidationPipe } from '../../helpers/zodValidationPipeline';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createPostSchema))
  async create(@Body() createPostDto: CreatePostDto) {
    this.postService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<PostInterface[]> {
    try {
      return await this.postService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findOne(id);
  }
}
