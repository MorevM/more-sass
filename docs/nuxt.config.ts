import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import type { NuxtPage } from 'nuxt/schema';

const require = createRequire(import.meta.url);
const docsLandingTemplate = fileURLToPath(new URL('./app/templates/docs-landing.vue', import.meta.url));
const docsLandingPath = '/:lang(en|ru)?';

const isLandingPage = (page: NuxtPage): boolean => {
	return page.name === 'lang-index'
		|| page.name === 'index'
		|| page.path === docsLandingPath
		|| page.path === '/:lang?'
		|| page.path === '/';
};

const replaceLandingPage = (pages: NuxtPage[]): void => {
	const landingPage = {
		name: 'lang-index',
		path: docsLandingPath,
		file: docsLandingTemplate,
		meta: {
			layout: 'docs',
		},
	};

	for (let index = pages.length - 1; index >= 0; index--) {
		const page = pages[index];

		if (page && isLandingPage(page)) {
			pages.splice(index, 1);
		}
	}

	pages.unshift(landingPage);
};

export default defineNuxtConfig({
	modules: ['@nuxtjs/i18n'],
	alias: {
		// Nitro turns Vue's CJS require('entities/decode') into a default ESM import.
		'entities/decode': require.resolve('entities/decode'),
		'estree-walker': require.resolve('estree-walker'),
	},
	devServer: {
		port: 4000,
	},
	app: {
		baseURL: '/more-sass/',
	},
	icon: {
		collections: ['lucide', 'simple-icons', 'vscode-icons'],
		provider: 'none',
		serverBundle: false,
		clientBundle: {
			includeCustomCollections: true,
			scan: true,
			// Docus resolves these names from config and code block metadata at runtime.
			icons: [
				'lucide:arrow-down',
				'lucide:arrow-left',
				'lucide:arrow-right',
				'lucide:arrow-up',
				'lucide:arrow-up-right',
				'lucide:brain',
				'lucide:check',
				'lucide:check-circle',
				'lucide:chevron-down',
				'lucide:chevron-left',
				'lucide:chevron-right',
				'lucide:chevron-up',
				'lucide:chevrons-left',
				'lucide:chevrons-right',
				'lucide:circle-alert',
				'lucide:circle-check',
				'lucide:circle-x',
				'lucide:copy',
				'lucide:copy-check',
				'lucide:download',
				'lucide:ellipsis',
				'lucide:eye',
				'lucide:eye-off',
				'lucide:file',
				'lucide:folder',
				'lucide:folder-open',
				'lucide:grip-vertical',
				'lucide:hash',
				'lucide:info',
				'lucide:lightbulb',
				'lucide:link',
				'lucide:list-x',
				'lucide:loader-circle',
				'lucide:menu',
				'lucide:message-circle-question',
				'lucide:minus',
				'lucide:monitor',
				'lucide:moon',
				'lucide:palette',
				'lucide:panel-left-close',
				'lucide:panel-left-open',
				'lucide:panel-right-close',
				'lucide:pen',
				'lucide:plus',
				'lucide:rotate-ccw',
				'lucide:search',
				'lucide:square',
				'lucide:sun',
				'lucide:text-align-start',
				'lucide:triangle-alert',
				'lucide:upload',
				'lucide:x',
				'simple-icons:anthropic',
				'simple-icons:cursor',
				'simple-icons:github',
				'simple-icons:markdown',
				'simple-icons:openai',
				'simple-icons:windsurf',
				'vscode-icons:file-type-css',
				'vscode-icons:file-type-js',
				'vscode-icons:file-type-json',
				'vscode-icons:file-type-markdown',
				'vscode-icons:file-type-node',
				'vscode-icons:file-type-npm',
				'vscode-icons:file-type-nuxt',
				'vscode-icons:file-type-pnpm',
				'vscode-icons:file-type-sass',
				'vscode-icons:file-type-scss',
				'vscode-icons:file-type-typescript',
				'vscode-icons:file-type-yaml',
				'vscode-icons:file-type-yarn',
			],
		},
	},
	site: {
		name: 'More Sass',
		url: 'https://morevm.github.io',
	},
	robots: {
		robotsTxt: false,
	},
	llms: {
		domain: 'https://morevm.github.io/more-sass/',
	},
	nitro: {
		prerender: {
			autoSubfolderIndex: true,
			failOnError: true,
			routes: ['/'],
		},
	},
	hooks: {
		'pages:extend': replaceLandingPage,
		'pages:resolved': replaceLandingPage,
	},
	i18n: {
		baseUrl: 'https://morevm.github.io',
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				name: 'English',
			},
			{
				code: 'ru',
				name: 'Русский',
			},
		],
	},
});
