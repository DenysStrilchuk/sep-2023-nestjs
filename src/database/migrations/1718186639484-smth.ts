import { MigrationInterface, QueryRunner } from "typeorm";

export class Smth1718186639484 implements MigrationInterface {
    name = 'Smth1718186639484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "UQ_af90adc46c549b2a7ee83c6e442" UNIQUE ("user_id", "article_id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "UQ_af90adc46c549b2a7ee83c6e442"`);
    }

}
