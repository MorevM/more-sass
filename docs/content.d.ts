import type { PageCollectionItemBase } from '@nuxt/content';

declare module '@nuxt/content' {
	interface DocsCollectionItem extends PageCollectionItemBase {
		links?: Array<{
			label: string;
			icon: string;
			to: string;
			target?: string;
		}>;
	}
}
