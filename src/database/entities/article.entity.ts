import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { TableNamesEnum } from './enums/table-names.enum';
import { LikeEntity } from './like.entity';
import { BaseModel } from './models/base.model';
import { UserEntity } from './user.entity';

@Entity({ name: TableNamesEnum.ARTICLES })
export class ArticleEntity extends BaseModel {
  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  body: string;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.articles)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => LikeEntity, (entity) => entity.articles)
  likes: LikeEntity[];
}
