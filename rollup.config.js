import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less-loader';

import pkg from './package.json';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true
  },
  external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
  ],

  plugins: [
    resolve(),
    babel({ 
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-syntax-nullish-coalescing-operator',
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ]
    }),
    commonjs(),
    less()
  ]
}]