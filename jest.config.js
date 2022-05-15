module.exports = {
  // TypeScript は ts-jest でトランスパイルする
  transform: { "^.+\\.ts$": "ts-jest" },
  // apps からテストファイルを検索
  roots: ["<rootDir>/apps", "<rootDir>/libs"],
  // テストがないファイルも含めてカバレッジを取得する
  collectCoverageFrom: ["<rootDir>/apps/**/*.ts", "<rootDir>/libs/**/*.ts"],
};
