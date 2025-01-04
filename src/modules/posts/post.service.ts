import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostService {
  private readonly posts: Post[] = [];

  create(post: Post) {
    this.posts.push(post);
  }

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post | undefined {
    return this.posts.find((_) => (_.id = id));
  }
}
