import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public authorId!: number;

  @Column()
  public title!: string;

  @Column()
  public body!: string;

  @Column()
  public createdAt?: Date;

  constructor(authorId: number, title: string, body: string) {
    this.authorId = authorId;
    this.title = title;
    this.body = body;
  }
}
