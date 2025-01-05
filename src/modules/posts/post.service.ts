import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  public async findAll(): Promise<Post[]> {
    return this.postRepository.find({ relations: ['author', 'comments'] });
  }

  public async create(post: CreatePostDto) {
    const now = new Date();
    const newPost = new Post(post.authorId, post.title, post.body, now);
    return this.postRepository.save(newPost);
  }

  /*  findOne(id: number): Post | undefined {
    return undefined;
  }*/
}
