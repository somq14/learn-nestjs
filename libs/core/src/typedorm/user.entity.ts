import { Attribute, Entity } from "@typedorm/common";

@Entity({
  name: "User",
  primaryKey: {
    partitionKey: "User#{{userId}}",
    sortKey: "User#{{userId}}",
  },
  indexes: {},
})
export class UserEntity {
  @Attribute()
  userId!: string;

  @Attribute()
  userName!: string;
}
