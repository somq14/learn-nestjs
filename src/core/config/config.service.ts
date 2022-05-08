import { Injectable } from "@nestjs/common";
import { config } from "dotenv";

@Injectable()
export class ConfigService {
  constructor() {
    const path = process.env["ENV_FILE_PATH"];
    const option = path !== undefined ? { path } : {};
    config(option);
  }

  get(key: string): string {
    const value = process.env[key];
    if (value === undefined) {
      throw new Error(`${key} is not defined`);
    }
    return value;
  }

  getOptional(key: string, defaultValue?: string): string | undefined {
    const value = process.env[key];
    return value ?? defaultValue;
  }
}
