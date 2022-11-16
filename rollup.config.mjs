import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/esm/index.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "./dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    },
  ],

  plugins: [
    babel({
      presets: [
        [
          "@babel/preset-env",
          {
            targets: ">= 0.25%, not dead, ie >= 10",
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
      ],
    }),
  ],
};
