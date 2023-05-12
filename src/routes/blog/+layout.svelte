<div class="prose max-w-5xl mx-auto py-12">
	<slot />
</div>

<style lang="postcss">
	:global(.prose *) {
		@apply text-white;

		&:is(p) {
			@apply font-serif;
		}

		&:is(h1) {
			@apply text-yellow-500;
		}
	}
</style>
