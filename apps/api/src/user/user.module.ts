import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";

import { TypedormModule } from "@libs/core/typedorm";

@Module({
  controllers: [UserController],
  imports: [TypedormModule],
})
export class UserModule {}
