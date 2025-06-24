import { combine, defineConfiguration, defineIgnores } from '@morev/eslint-config';

export default combine([
	defineIgnores({
		gitignoreFiles: [
			'./.gitignore',
			'./docs/.gitignore',
		],
		extraIgnoredGlobs: [
			'docs/nuxt.config.js',
		],
	}),
	defineConfiguration('javascript'),
	defineConfiguration('node'),
	defineConfiguration('json'),
	defineConfiguration('markdown', {
		overrides: {
			// Lists indentation within custom components
			'markdownlint/md007': 'off',
			// Line length
			'markdownlint/md013': 'off',
			// Allow inline elements (`<code-group>` and other `@nuxt/content-theme-docs` components)
			'markdownlint/md033': 'off',
		},
	}),
	defineConfiguration('vitest'),
	defineConfiguration('yaml'),
	defineConfiguration('html'),
	defineConfiguration('typescript'),
]);
