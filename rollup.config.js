import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

const config = fs.readdirSync("src").map(component => ({
  input: `src/${component}/index.js`,
  external: [
    "react",
    "react-dom",
    "@emotion/core",
    "@emotion/styled",
    "emotion-theming",
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      externalHelpers: true,
    }),
    resolve(),
    commonjs(),
    json(),
    production && terser(),
  ],
  output: [
    {
      file: `cjs/${component}.js`,
      format: "cjs",
    },
    {
      file: `${component}.js`,
      format: "esm",
    },
  ],
}));
export default config;
