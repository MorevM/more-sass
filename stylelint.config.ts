import { defineConfig } from '@morev/stylelint-config';

export default defineConfig({}, {
	rules: {
		// Well, `stylelint-config` designed to be used with style files,
		// but it's the library, and some rules make it worse
		'@stylistic/max-line-length': null,
		'scss/dollar-variable-first-in-block': null,
		'scss/dollar-variable-empty-line-before': null,
		'scss/function-no-unknown': null,
		'length-zero-no-unit': null,
		'@stylistic/number-leading-zero': null,
		'declaration-empty-line-before': null,
		'order/order': null,
		'declaration-block-no-redundant-longhand-properties': null,
	},
	overrides: [
		{
			files: ['*.test.scss'],
			rules: {
				// False positives within tests
				'nesting-selector-no-missing-scoping-root': null,
				'no-invalid-position-declaration': null,
				'@morev/base/no-selectors-in-at-rules': null,
			},
		},
		{
			files: ['**/variables/**/*.scss'],
			rules: {
				// Variables are exported
				'@morev/sass/no-unused-variables': null,
			},
		},
	],
});
