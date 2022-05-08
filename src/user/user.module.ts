import { Module } from "@nestjs/common";

import { TypedormModule } from "../core/typedorm";

import { UserController } from "./user.controller";

@Module({
  controllers: [UserController],
  imports: [TypedormModule],
})
export class UserModule {}
