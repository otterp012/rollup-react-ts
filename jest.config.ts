import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
  watchPathIgnorePatterns: ["node_modules", "dist"],
};
// https://gatsbybosungblogmain.gatsbyjs.io/tdd3/
export default jestConfig;
