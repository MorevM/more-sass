module.exports = {
	extends: [
		'@morev/stylelint-config/scss/warn-autofixable',
	],
	rules: {
		// Well, `stylelint-config` designed to be used with style files,
		// but it's the library, and some rules make it worse
		'max-line-length': null,
		'scss/dollar-variable-first-in-block': null,
		'scss/dollar-variable-empty-line-before': null,
		'length-zero-no-unit': null,
		'number-leading-zero': null,
		'aditayvm/at-rule-no-children': null,
		'declaration-empty-line-before': null,
	}
};
