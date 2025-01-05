import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { CommentsService } from '../comments.service';
import { ZodValidationPipe } from '../../../common/pipes/zodValidationPipeline';
import { CreateCommentDto, createCommentSchema } from '../dto/comment.dto';

@Controller('comments')
export class CommentsController {

  constructor(
    private commentService: CommentsService
  ) {
  }


  @Post()
  @UsePipes(new ZodValidationPipe(createCommentSchema))
  async create(@Body() createPostDto: CreateCommentDto) {
    try {
      return this.commentService.create(createPostDto);
    } catch (e) {
      throw new Error(e);
    }
  }
}
