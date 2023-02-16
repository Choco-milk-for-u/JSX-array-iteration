import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    external: Object.keys(pkg.peerDependencies),
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
        exports: "named"
      },
      {
        file: "dist/index.mjs",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        extensions: [".js", ".jsx"],
        presets: [["@babel/preset-react", { runtime: "automatic"}]],
      }),
      external(),
      resolve({ extensions: [".js", ".jsx"] }),
    ],
  },
];
