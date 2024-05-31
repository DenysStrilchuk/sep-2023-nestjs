import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

import { ArticleEntity } from './article.entity';
import { TableNamesEnum } from './enums/table-names.enum';
import { BaseModel } from './models/base.model';
import { UserEntity } from './user.entity';

@Entity({ name: TableNamesEnum.COMMENTS })
export class CommentEntity extends BaseModel {
  @Column('text')
  body: string;

  @Column()
  article_id: string;
  @ManyToOne(() => ArticleEntity, (entity) => entity.comments)
  @JoinColumn({ name: 'article_id' })
  article?: ArticleEntity;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.comments)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
