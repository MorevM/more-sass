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
		defaultLocale: 'ru',
	},
});
