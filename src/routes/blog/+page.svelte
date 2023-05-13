<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: {
		console.log(data);
	}
</script>

<main class="flex">
	<img src="/images/astronaut.png" alt="" class="w-[24rem]" />
	<div class="max-w-5xl py-12">
		<ul class="space-y-8">
			{#each data.posts as post}
				<li>
					<a href={post.slug} class="block underline font-semibold text-4xl py-2">{post.title}</a>
					<span class="block text-neutral-500">{new Date(post.date).toLocaleDateString()}</span>
				</li>
			{/each}
		</ul>
	</div>
</main>
