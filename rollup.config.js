// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.ts', '.tsx'];

function setUpRollup({ input, output }) {
  return {
    input,
    output,
    watch: {
      include: '*',
      exclude: 'node_modules/**',
    },
    plugins: [
      peerDepsExternal(),
      json(),
      resolve({ extensions }),
      typescript(),
    ],
    external: ['react', 'react-dom'],
  };
}

export default [
  setUpRollup({
    input: './src/index.ts',
    output: {
      file: './dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  }),
];
