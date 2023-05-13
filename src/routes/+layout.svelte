<script lang="ts">
	import '../app.postcss';
	import NavRoute from '../lib/components/NavRoute.svelte';
	import { page } from '$app/stores';
</script>

<div class="sticky top-0">
	<nav class="my-8 grid grid-cols-3 max-w-5xl mx-auto">
		<div class="flex items-center gap-2">
			<img src="/images/mars.png" alt="" class="aspect-square w-14 h-14" />
			<a href="/" class="font-semibold text-md"
				>Mars Software <span class="block">Solutions LLC</span></a
			>
		</div>
		<div class="flex justify-center gap-8 rounded-full border border-neutral-700 bg-black w-fit mx-auto p-2">
			<NavRoute href="/" isActiveRoute={$page.url.pathname === '/'}>Home</NavRoute>
			<NavRoute href="/blog" isActiveRoute={$page.url.pathname.startsWith('/blog')}>Blog</NavRoute>
		</div>
		<div class="w-4" />
	</nav>
</div>
<slot />
