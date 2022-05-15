import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { Connection } from "@typedorm/core";

import { GetUserParam, GetUserResponse } from "./user.resource";

import { UserEntity } from "@libs/core/typedorm";

@Controller("/users")
export class UserController {
  constructor(readonly connection: Connection) {}

  @Get(":userId")
  async getUser(@Param() param: GetUserParam): Promise<GetUserResponse> {
    const user = await this.connection.entityManager.findOne(UserEntity, {
      userId: param.userId,
    });

    if (user === undefined) {
      throw new HttpException(
        {
          message: "user was not found",
        },
        HttpStatus.NOT_FOUND
      );
    }

    return {
      userId: user.userId,
      userName: user.userName,
    };
  }
}
