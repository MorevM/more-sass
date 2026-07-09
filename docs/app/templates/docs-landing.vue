<template>
	<u-page
		v-if="page"
		:ui="isOpen ? { center: 'lg:col-span-10' } : undefined"
	>
		<u-page-header
			:title="page.title"
			:description="page.description"
			:ui="{
				wrapper: 'flex-row items-center flex-wrap justify-between',
			}"
		>
			<template #links>
				<docs-page-header-links />
			</template>
		</u-page-header>

		<u-page-body>
			<content-renderer :value="page" />

			<u-separator v-if="github">
				<div class="flex items-center gap-2 text-sm text-muted">
					<u-button
						variant="link"
						color="neutral"
						target="_blank"
						icon="i-lucide-pen"
						:to="editLink"
						:ui="{ leadingIcon: 'size-4' }"
					>
						{{ t('docs.edit') }}
					</u-button>
					<template v-if="github.url">
						<span>{{ t('common.or') }}</span>
						<u-button
							variant="link"
							color="neutral"
							target="_blank"
							icon="i-lucide-alert-circle"
							:to="`${github.url}/issues/new/choose`"
							:ui="{ leadingIcon: 'size-4' }"
						>
							{{ t('docs.report') }}
						</u-button>
					</template>
				</div>
			</u-separator>
		</u-page-body>

		<template
			v-if="!isOpen"
			#right
		>
			<docs-aside-right :page="page" />
		</template>
	</u-page>
</template>

<script setup lang="ts">
	import { kebabCase } from 'scule';
	import type { Collections } from '@nuxt/content';

	definePageMeta({
		layout: 'docs',
	});

	const route = useRoute();
	const { locale, isEnabled, t } = useDocusI18n();
	const { isOpen } = useAssistant();
	const appConfig = useAppConfig();
	const collectionName = computed(() => isEnabled.value ? `landing_${locale.value}` : 'landing');

	const { data: page } = await useAsyncData(kebabCase(`landing-${route.path}`), () => {
		return queryCollection(collectionName.value as keyof Collections).path(route.path).first();
	});

	if (!page.value) {
		throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
	}

	const title = page.value.seo?.title || page.value.title;
	const description = page.value.seo?.description || page.value.description;

	useSeo({
		title,
		description,
		type: 'website',
		ogImage: page.value.seo?.ogImage as string | undefined,
	});

	if (!page.value.seo?.ogImage) {
		defineOgImage('Docs', {
			title: title?.slice(0, 60),
			description: formatOgDescription(title, description),
		});
	}

	const github = computed(() => appConfig.github || null);

	const editLink = computed(() => {
		if (!github.value) return;

		return [
			github.value.url,
			'edit',
			github.value.branch,
			github.value.rootDir,
			'content',
			`${page.value?.stem}.${page.value?.extension}`,
		].filter(Boolean).join('/');
	});
</script>
