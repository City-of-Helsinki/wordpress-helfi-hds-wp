import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const plugins = [
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
];

const external = [
  'react',
  'react-dom',
  'lodash'
];

export default [
  {
    input: 'src/react/components/index.js',
    output: {
      dir: 'assets/react/components',
      format: 'iife',
      name: 'library',
      compact: true,
      sourcemap: false,
      globals: {
        lodash: 'lodash',
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    plugins,
    external
  },
  {
    input: 'src/react/content-filter-list/index.js',
    output: {
      dir: 'assets/react/content-filter-list',
      format: 'iife',
      name: 'library',
      compact: true,
      sourcemap: false,
      globals: {
        lodash: 'lodash',
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    plugins,
    external
  }
];
