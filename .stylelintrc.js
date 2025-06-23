/** @type {import('stylelint').Config} */
export default {
	extends: [
		'@morev/stylelint-config',
	],
	rules: {
		// Well, `stylelint-config` designed to be used with style files,
		// but it's the library, and some rules make it worse
		'@stylistic/max-line-length': null,
		'scss/dollar-variable-first-in-block': null,
		'scss/dollar-variable-empty-line-before': null,
		'scss/function-no-unknown': null,
		'length-zero-no-unit': null,
		'@stylistic/number-leading-zero': null,
		'aditayvm/at-rule-no-children': null,
		'declaration-empty-line-before': null,
		'order/order': null,
		'declaration-block-no-redundant-longhand-properties': null,
	},
};
