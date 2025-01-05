import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    public readonly commentRepository: Repository<Comment>,
  ) {}

  public async findAllForPost(id: number) {
    //return this.postRepository.find();
  }

  public async create(commentDto: CreateCommentDto) {
    const comment = new Comment(
      commentDto.authorId,
      commentDto.postId,
      commentDto.text,
    );
    return this.commentRepository.save(comment);
  }
}
