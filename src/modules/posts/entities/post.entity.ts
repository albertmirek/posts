import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Comment } from '../../comments/entities/comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(() => User)
  public author: User;
  @Column()
  public authorId!: number;

  @OneToMany((_) => Comment, (comment) => comment.post)
  public comments?: Comment[];

  @Column()
  public title!: string;

  @Column()
  public body!: string;

  @Column()
  public createdAt: Date;

  constructor(authorId: number, title: string, body: string, createdAt: Date) {
    this.authorId = authorId;
    this.title = title;
    this.body = body;
    this.createdAt = createdAt;
  }
}
