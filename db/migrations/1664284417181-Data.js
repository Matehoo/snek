module.exports = class Data1664284417181 {
  name = 'Data1664284417181'

  async up(db) {
    await db.query(`CREATE TABLE "collection_event" ("id" character varying NOT NULL, "block_number" numeric, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "caller" text NOT NULL, "current_owner" text, "interaction" character varying(11) NOT NULL, "meta" text NOT NULL, "collection_id" character varying, CONSTRAINT "PK_5071dfbea812b4caade2ede2139" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_93f81f26d6b052b289167b3ae3" ON "collection_event" ("collection_id") `)
    await db.query(`CREATE TABLE "metadata_entity" ("id" character varying NOT NULL, "name" text, "description" text, "image" text, "attributes" jsonb, "animation_url" text, "type" text, CONSTRAINT "PK_2cb9d5d4ae99d9a27497bf8d2e8" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "block_number" numeric, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "caller" text NOT NULL, "current_owner" text NOT NULL, "interaction" character varying(11) NOT NULL, "meta" text NOT NULL, "nft_id" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_9380d479563e5a664759359470" ON "event" ("nft_id") `)
    await db.query(`CREATE TABLE "offer_event" ("id" character varying NOT NULL, "block_number" numeric, "caller" text NOT NULL, "current_owner" text, "interaction" character varying(6) NOT NULL, "meta" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "offer_id" character varying, CONSTRAINT "PK_292fd2efd338dfd5d627a4310e3" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_0cbe3e93f04317e2e80d29affc" ON "offer_event" ("offer_id") `)
    await db.query(`CREATE TABLE "offer" ("id" character varying NOT NULL, "block_number" numeric NOT NULL, "caller" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "expiration" numeric NOT NULL, "price" numeric NOT NULL, "status" character varying(9) NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE, "nft_id" character varying, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_71609884f4478ed41be6672a66" ON "offer" ("nft_id") `)
    await db.query(`CREATE TABLE "nft_entity" ("id" character varying NOT NULL, "block_number" numeric, "burned" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "current_owner" text NOT NULL, "hash" text NOT NULL, "issuer" text NOT NULL, "metadata" text, "name" text, "price" numeric, "royalty" numeric, "recipient" text, "sn" text NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "collection_id" character varying, "meta_id" character varying, CONSTRAINT "PK_ed09c6a38c0f0a867d5a7b63f0d" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_4b98bf4d630de0037475b9bbb7" ON "nft_entity" ("collection_id") `)
    await db.query(`CREATE INDEX "IDX_0a42c2c09b35a7535045d4a2f4" ON "nft_entity" ("current_owner") `)
    await db.query(`CREATE INDEX "IDX_16e57ac8478b6ea1f383e3eb03" ON "nft_entity" ("hash") `)
    await db.query(`CREATE INDEX "IDX_2bfc45b91959a14ab8b2d734cd" ON "nft_entity" ("meta_id") `)
    await db.query(`CREATE INDEX "IDX_54ca209d76ebe11ccc3c4e75d1" ON "nft_entity" ("name") `)
    await db.query(`CREATE TABLE "collection_entity" ("id" character varying NOT NULL, "block_number" numeric, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "current_owner" text NOT NULL, "burned" boolean NOT NULL, "issuer" text NOT NULL, "metadata" text, "name" text, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "type" character varying(15) NOT NULL, "meta_id" character varying, CONSTRAINT "PK_5d44e140c4fcb3d961f9e83405f" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_014542183f297493eab0cd8bdf" ON "collection_entity" ("meta_id") `)
    await db.query(`CREATE INDEX "IDX_b0d709797451c6237e8ec0fee8" ON "collection_entity" ("name") `)
    await db.query(`CREATE TABLE "asset_entity" ("id" character varying NOT NULL, "name" text, "symbol" text, "decimals" integer, CONSTRAINT "PK_038b7b28b83db2205747ef9912e" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "series" ("id" character varying NOT NULL, "unique" integer NOT NULL, "unique_collectors" integer NOT NULL, "sold" integer NOT NULL, "total" integer NOT NULL, "average_price" numeric, "floor_price" numeric, "buys" integer, "volume" numeric, "name" text NOT NULL, "metadata" text, "image" text, CONSTRAINT "PK_e725676647382eb54540d7128ba" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_e9b94c49c07399bfa4bb6ab1a7" ON "series" ("sold") `)
    await db.query(`CREATE INDEX "IDX_68b808a9039892c61219f868f2" ON "series" ("name") `)
    await db.query(`CREATE TABLE "cache_status" ("id" character varying NOT NULL, "last_block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_1001e39eb0aa38d043d96f7f4fa" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "collection_event" ADD CONSTRAINT "FK_93f81f26d6b052b289167b3ae3e" FOREIGN KEY ("collection_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_9380d479563e5a664759359470a" FOREIGN KEY ("nft_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "offer_event" ADD CONSTRAINT "FK_0cbe3e93f04317e2e80d29affc2" FOREIGN KEY ("offer_id") REFERENCES "offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "offer" ADD CONSTRAINT "FK_71609884f4478ed41be6672a668" FOREIGN KEY ("nft_id") REFERENCES "nft_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "nft_entity" ADD CONSTRAINT "FK_4b98bf4d630de0037475b9bbb7a" FOREIGN KEY ("collection_id") REFERENCES "collection_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "nft_entity" ADD CONSTRAINT "FK_2bfc45b91959a14ab8b2d734cd2" FOREIGN KEY ("meta_id") REFERENCES "metadata_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "collection_entity" ADD CONSTRAINT "FK_014542183f297493eab0cd8bdf8" FOREIGN KEY ("meta_id") REFERENCES "metadata_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "collection_event"`)
    await db.query(`DROP INDEX "public"."IDX_93f81f26d6b052b289167b3ae3"`)
    await db.query(`DROP TABLE "metadata_entity"`)
    await db.query(`DROP TABLE "event"`)
    await db.query(`DROP INDEX "public"."IDX_9380d479563e5a664759359470"`)
    await db.query(`DROP TABLE "offer_event"`)
    await db.query(`DROP INDEX "public"."IDX_0cbe3e93f04317e2e80d29affc"`)
    await db.query(`DROP TABLE "offer"`)
    await db.query(`DROP INDEX "public"."IDX_71609884f4478ed41be6672a66"`)
    await db.query(`DROP TABLE "nft_entity"`)
    await db.query(`DROP INDEX "public"."IDX_4b98bf4d630de0037475b9bbb7"`)
    await db.query(`DROP INDEX "public"."IDX_0a42c2c09b35a7535045d4a2f4"`)
    await db.query(`DROP INDEX "public"."IDX_16e57ac8478b6ea1f383e3eb03"`)
    await db.query(`DROP INDEX "public"."IDX_2bfc45b91959a14ab8b2d734cd"`)
    await db.query(`DROP INDEX "public"."IDX_54ca209d76ebe11ccc3c4e75d1"`)
    await db.query(`DROP TABLE "collection_entity"`)
    await db.query(`DROP INDEX "public"."IDX_014542183f297493eab0cd8bdf"`)
    await db.query(`DROP INDEX "public"."IDX_b0d709797451c6237e8ec0fee8"`)
    await db.query(`DROP TABLE "asset_entity"`)
    await db.query(`DROP TABLE "series"`)
    await db.query(`DROP INDEX "public"."IDX_e9b94c49c07399bfa4bb6ab1a7"`)
    await db.query(`DROP INDEX "public"."IDX_68b808a9039892c61219f868f2"`)
    await db.query(`DROP TABLE "cache_status"`)
    await db.query(`ALTER TABLE "collection_event" DROP CONSTRAINT "FK_93f81f26d6b052b289167b3ae3e"`)
    await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_9380d479563e5a664759359470a"`)
    await db.query(`ALTER TABLE "offer_event" DROP CONSTRAINT "FK_0cbe3e93f04317e2e80d29affc2"`)
    await db.query(`ALTER TABLE "offer" DROP CONSTRAINT "FK_71609884f4478ed41be6672a668"`)
    await db.query(`ALTER TABLE "nft_entity" DROP CONSTRAINT "FK_4b98bf4d630de0037475b9bbb7a"`)
    await db.query(`ALTER TABLE "nft_entity" DROP CONSTRAINT "FK_2bfc45b91959a14ab8b2d734cd2"`)
    await db.query(`ALTER TABLE "collection_entity" DROP CONSTRAINT "FK_014542183f297493eab0cd8bdf8"`)
  }
}