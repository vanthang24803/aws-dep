import globals from 'globals';
import pluginJs from '@eslint/eslint-plugin';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
