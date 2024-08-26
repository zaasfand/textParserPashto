// rollup.config.js
const { terser } = require('rollup-plugin-terser');

module.exports = {
    input: 'textParserPashto.js',
    output: {
        file: 'dist/textParserPashto.bundle.js',
        format: 'umd', // Universal Module Definition
        name: 'PashtoTextParser', // The global variable name for UMD build
        globals: {}
    },
    plugins: [terser()],
    external: [] // List external dependencies if your library relies on them
};
