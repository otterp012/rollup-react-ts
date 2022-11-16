import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.tsx",
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
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
        ,
      ],
    }),
  ],
};
