module.exports = {
  // TypeScript は ts-jest でトランスパイルする
  transform: { "^.+\\.ts$": "ts-jest" },
  // apps からテストファイルを検索
  roots: ["<rootDir>/apps"],
  // テストがないファイルも含めてカバレッジを取得する
  collectCoverageFrom: ["<rootDir>/apps/**/*.ts"],
};
