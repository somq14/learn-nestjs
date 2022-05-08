import { Test } from "@nestjs/testing";
import { Connection } from "@typedorm/core";

import { TypedormModule } from "./typedorm.module";

describe(TypedormModule.name, () => {
  let sut: Connection;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [TypedormModule],
    }).compile();

    sut = module.get(Connection);
  });

  it("success", () => {
    expect(sut).toBeTruthy();
  });
});
