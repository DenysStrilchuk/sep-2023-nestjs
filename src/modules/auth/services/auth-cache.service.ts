import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';

import { Config, JWTConfig } from '../../../configs/configs.type';
import { RedisService } from '../../redis/redis.service';

@Injectable()
export class AuthCacheService {
  private jwtConfig: JWTConfig;

  constructor(
    private readonly redisService: RedisService,
    private readonly configService: ConfigService<Config>,
  ) {
    this.jwtConfig = this.configService.get('jwt');
  }

  public async saveToken(
    token: string,
    userId: string,
    deviceId: string,
  ): Promise<void> {
    const key = this.getKey(userId, deviceId);

    await this.redisService.deleteByKey(key);
    await this.redisService.addOneToSet(key, token);
    await this.redisService.expire(key, this.jwtConfig.accessExpiresIn);
  }

  public async isAccessTokenExist(
    userId: string,
    deviceId: string,
    token: string,
  ): Promise<boolean> {
    const key = this.getKey(userId, deviceId);
    const set = await this.redisService.sMembers(key);
    return set.includes(token);
  }

  private getKey(userId: string, deviceId: string): string {
    return `ACCESS_TOKEN:${userId}:${deviceId}`;
  }
}
