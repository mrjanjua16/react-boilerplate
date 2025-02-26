import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginVite from 'eslint-plugin-vite';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			parser: tsParser,
			globals: globals.browser,
		},
		plugins: {
			'@typescript-eslint': tseslint,
			react: pluginReact,
			vite: pluginVite,
		},
		rules: {
			// Add any custom rules here
		},
	},
	pluginJs.configs.recommended,
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginVite.configs.recommended,
];
