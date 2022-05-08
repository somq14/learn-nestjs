import "reflect-metadata";
import { Test } from "@nestjs/testing";

import { ConfigModule } from "./config.module";
import { ConfigService } from "./config.service";

describe(ConfigModule.name, () => {
  let sut: ConfigService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigModule],
    }).compile();

    sut = moduleRef.get(ConfigService);
  });

  beforeEach(() => {
    process.env["TEST_KEY"] = "TEST_VALUE";
  });

  afterEach(() => {
    delete process.env["TEST_KEY"];
  });

  describe("get", () => {
    it("normal", () => {
      expect(sut.get("TEST_KEY")).toEqual("TEST_VALUE");
    });

    it("unknown", () => {
      expect(() => sut.get("UNKNOWN_KEY")).toThrow(
        "UNKNOWN_KEY is not defined"
      );
    });
  });

  describe("getOptional", () => {
    it("normal", () => {
      expect(sut.getOptional("TEST_KEY")).toEqual("TEST_VALUE");
    });

    it("default", () => {
      expect(sut.getOptional("UNKNOWN_KEY", "DEFAULT_VALUE")).toEqual(
        "DEFAULT_VALUE"
      );
    });

    it("unknown", () => {
      expect(sut.getOptional("UNKNOWN_KEY")).toEqual(undefined);
    });
  });
});
