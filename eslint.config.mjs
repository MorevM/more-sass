import { combine, defineConfiguration, defineIgnores } from '@morev/eslint-config';

export default combine([
	defineIgnores({
		gitignoreFiles: [
			'./.gitignore',
			'./docs/.gitignore',
		],
	}),
	defineConfiguration('javascript'),
	defineConfiguration('node'),
	defineConfiguration('json'),
	defineConfiguration('markdown', {
		overrides: {
			// Lists indentation within custom components
			'markdown-preferences/indent': 'off',
			// Allow inline elements used inside API tables.
			'markdown/no-html': 'off',
		},
	}),
	defineConfiguration('vitest'),
	defineConfiguration('yaml'),
	defineConfiguration('html'),
	defineConfiguration('vue', {
		overrides: {
			'vue/comma-dangle': 'off',
		},
	}),
	{
		files: [
			'docs/**/*.{js,mjs,cjs,ts,mts,cts,vue}',
			'docs/**/*.md',
			'docs/**/*.md/*',
		],
		rules: {
			// Docus and Nuxt provide many globals/components through their own runtime auto-imports.
			'no-undef': 'off',
			'vue/no-undef-components': 'off',
			// Docs are a nested app with its own dependencies and Nuxt component naming conventions.
			'import-x/no-unresolved': 'off',
			'unicorn/filename-case': 'off',
		},
	},
	defineConfiguration('typescript'),
]);
