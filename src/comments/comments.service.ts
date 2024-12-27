import { Injectable } from '@nestjs/common';
import { PostService } from '../posts/post.service';

@Injectable()
export class CommentsService {

  constructor(
    private readonly postsService: PostService
  ) {
  }
}
