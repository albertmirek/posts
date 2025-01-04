import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
//import { Post } from './interfaces/post.interface';

@Injectable()
export class PostService {
  //private readonly posts: Post[] = [];
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  public async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  create(post: Post) {
    return;
  }
  

  findOne(id: number): Post | undefined {
    return undefined;
  }
}
