import theme from '@nuxt/content-theme-docs';

export default theme({
	server: {
		port: 4000,
	},
	i18n: {
		locales: () => [{
			code: 'ru',
			iso: 'ru-RU',
			name: 'Русский',
			file: 'ru-RU.js',
		}, {
			code: 'en',
			iso: 'en-US',
			name: 'English',
			file: 'en-US.js',
		}],
		defaultLocale: 'en',
	},
	head: {
		style: [
			{ cssText: 'body .prose thead th {vertical-align: top; line-height: 1.4;}' },
			{ cssText: 'body .prose pre code {font-family: inherit;}' },
			{
				cssText: `
					@media (min-width: 1280px)
					.container {
							max-width: 1380px;
					}
			`,
			},
		],
	},
});
