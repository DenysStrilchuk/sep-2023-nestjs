import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActiveTtoUser1716633797532 implements MigrationInterface {
    name = 'AddIsActiveTtoUser1716633797532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
