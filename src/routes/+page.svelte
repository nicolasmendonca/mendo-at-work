<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let show = false;

	onMount(() => {
		setTimeout(() => {
			show = true;
		}, 0);
	});
</script>

{#if show}
	<header
		class="my-24 flex items-center justify-center space-x-12 max-w-5xl mx-auto"
		in:fade={{ delay: 200, duration: 1500 }}
	>
		<h1 class="text-6xl font-extrabold">
			Launch your ideas <span
				class="block text-8xl text-transparent bg-clip-text bg-gradient-to-b from-orange-700 to-orange-400"
				>to Space</span
			>
		</h1>
		<div class="rounded-lg bg-gradient-to-b from-orange-700 to-orange-400 p-1">
			<img src="/images/mars-with-rocket.png" alt="" class="square w-[30rem] rounded-lg" />
		</div>
	</header>
{/if}
