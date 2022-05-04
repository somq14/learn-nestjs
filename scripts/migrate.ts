import { DynamoDB } from "aws-sdk";

const endpoint = process.env["DYNAMO_ENDPOINT"] ?? "";
const tableName = process.env["DYNAMO_TABLE_NAME"] ?? "";

const client = new DynamoDB({ endpoint });

const ddl = {
  TableName: tableName,
  AttributeDefinitions: [
    {
      AttributeName: "PK",
      AttributeType: "S",
    },
    {
      AttributeName: "SK",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      KeyType: "HASH",
      AttributeName: "PK",
    },
    {
      KeyType: "RANGE",
      AttributeName: "SK",
    },
  ],
  BillingMode: "PAY_PER_REQUEST",
};

void (async () => {
  const { TableNames } = await client.listTables().promise();
  if (TableNames?.includes(ddl.TableName)) {
    await client
      .deleteTable({
        TableName: ddl.TableName,
      })
      .promise();
  }
  await client.createTable(ddl).promise();
})();
