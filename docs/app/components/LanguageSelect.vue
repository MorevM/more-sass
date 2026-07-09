<template>
	<u-popover :content="{ align: 'end' }">
		<u-button
			color="neutral"
			variant="ghost"
			class="size-8"
		>
			<template #trailing>
				<span class="text-xs font-semibold">
					{{ getLocaleCode(locale) }}
				</span>
			</template>
		</u-button>

		<template #content>
			<ul class="flex flex-col">
				<li
					v-for="localeItem in locales"
					:key="localeItem.code"
				>
					<nuxt-link
						class="flex justify-between py-1.5 px-2 gap-3 hover:bg-muted"
						:to="switchLocalePath(localeItem.code) as string"
						:aria-label="localeItem.name"
					>
						<span class="text-sm">
							{{ localeItem.name }}
						</span>
						<span class="min-w-5 text-center text-xs font-semibold text-muted">
							{{ getLocaleCode(localeItem.code) }}
						</span>
					</nuxt-link>
				</li>
			</ul>
		</template>
	</u-popover>
</template>

<script setup lang="ts">
	const { locale, locales, switchLocalePath } = useDocusI18n();

	const getLocaleCode = (value: string): string => value.split('-')[0]?.toUpperCase() ?? value.toUpperCase();
</script>
