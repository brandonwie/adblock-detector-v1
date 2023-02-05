// rollup.config.js
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import { OutputOptions, RollupOptions } from 'rollup';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.ts', '.tsx'];

function setUpRollup({
  input,
  output,
}: {
  input: string;
  output: OutputOptions | OutputOptions[];
}): RollupOptions {
  return {
    input,
    output,
    watch: {
      include: '*',
      exclude: 'node_modules/**',
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        extensions,
      }),
      nodeResolve({ extensions: ['.ts', '.tsx'] }),
      commonJS(),
      typescript({
        exclude: 'rollup.config.ts',
      }),
    ],
  };
}

export default function rollup(): RollupOptions[] {
  return [
    setUpRollup({
      input: './src/index.ts',
      output: {
        file: './dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    }),
  ];
}
