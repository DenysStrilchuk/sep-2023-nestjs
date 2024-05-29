import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { TableNamesEnum } from './enums/table-names.enum';
import { BaseModel } from './models/base.model';
import { UserEntity } from './user.entity';

@Entity({ name: TableNamesEnum.REFRESH_TOKENS })
export class RefreshTokenEntity extends BaseModel {
  @Column('text')
  refreshToken: string;

  @Column('text')
  deviceId: string;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.refreshToken)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
