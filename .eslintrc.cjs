require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    extends: ['../eslint-config-vanarok/index.js'],
    parserOptions: {
        tsconfigRootDir: './',
        project: [
            'tsconfig.json',
            'tsconfig.node.json',
            'tsconfig.nodenext.json',
        ],
        ecmaVersion: 'latest',
    },
};
