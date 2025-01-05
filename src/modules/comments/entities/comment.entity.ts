import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  public id!: number;

  @OneToOne(() => User)
  public author: User;
  @Column()
  public authorId!: number;

  @ManyToOne(() => Post)
  public post!: Post;
  @Column()
  public postId!: number;

  @Column()
  public text!: string;


  constructor(
    authorId: number,
    postId: number,
    text: string
  ) {
    this.authorId = authorId;
    this.postId = postId;
    this.text = text;
  }
}
