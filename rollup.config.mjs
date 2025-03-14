import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/react/date-picker.js',
  output: {
    dir: 'assets/react',
    format: 'iife',
    name: 'library',
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
    })
  ],
  external: [
    'react',
    'react-dom',
    'lodash'
  ]
};
