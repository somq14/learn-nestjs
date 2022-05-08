import { Module } from "@nestjs/common";
import { Table } from "@typedorm/common";
import { Connection, createConnection } from "@typedorm/core";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

import { ConfigModule, ConfigService } from "../config";

import { UserEntity } from "./user.entity";

const entities = [UserEntity];

@Module({
  providers: [
    {
      provide: Connection,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const endpoint = configService.getOptional("DYNAMO_ENDPOINT");
        const documentClient = new DocumentClient(
          endpoint !== undefined ? { endpoint } : {}
        );

        const tableName = configService.get("DYNAMO_TABLE_NAME");
        const table = new Table({
          name: tableName,
          partitionKey: "PK",
          sortKey: "SK",
          indexes: {},
        });

        const connection = createConnection({
          documentClient,
          table,
          entities,
        });

        return connection;
      },
    },
  ],
  imports: [ConfigModule],
})
export class TypedormModule {}
