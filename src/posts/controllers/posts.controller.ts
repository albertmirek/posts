import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { PostService } from '../post.service';
import { Post as PostInterface } from '../interfaces/post.interface';
import { CreatePostDto } from '../dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    this.postService.create(createPostDto);
  }

  @Get()
  async getAll(): Promise<PostInterface[]> {
    return this.postService.findAll();
  }
}
