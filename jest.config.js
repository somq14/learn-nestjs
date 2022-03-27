module.exports = {
  // TypeScript は ts-jest でトランスパイルする
  transform: { "^.+\\.ts$": "ts-jest" },
  // src からテストファイルを検索
  roots: ["<rootDir>/src"],
  // テストがないファイルも含めてカバレッジを取得する
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
};
