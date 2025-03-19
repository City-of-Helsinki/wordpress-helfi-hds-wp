import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/react/components.js',
  output: {
    dir: 'assets/react',
    format: 'iife',
    name: 'library',
    compact: true,
    sourcemap: false,
    globals: {
      lodash: 'lodash',
      react: 'React',
      reactDOM: 'ReactDOM'
    }
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx']
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    replace({
      preventAssignment: false,
      'process.env.NODE_ENV': '"development"'
    }),
    terser()
  ],
  external: [
    'react',
    'react-dom',
    'lodash'
  ]
};
