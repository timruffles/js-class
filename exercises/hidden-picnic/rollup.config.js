import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
    input: 'client/main.js',
    output: {
        file: 'dist/main.prod.js',
        format: 'iife',
        sourcemap: true,
    },


    plugins: [
        nodeResolve({
            // use "module" field for ES6 module if possible
            module: true, // Default: true


            // use "main" field or index.js, even if it's not an ES6 module
            // (needs to be converted from CommonJS to ES6
            // – see https://github.com/rollup/rollup-plugin-commonjs
            main: true,  // Default: true

            browser: true,  // Default: false

            // whether to prefer built-in modules (e.g. `fs`, `path`) or
            // local ones with the same names
            preferBuiltins: true,
        }),
        commonjs(),
        replace({
            'process.env.NODE_ENV': '"development"',
        })
    ]
};