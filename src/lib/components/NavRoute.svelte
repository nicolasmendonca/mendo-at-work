<script lang="ts">
	import { page } from '$app/stores';
	import type { RouteType } from '../constants';

	export let href: RouteType;

	$: isActiveRoute = $page.url.pathname.split('/').at(1) === href.split('/').at(1);
</script>

<a
	{href}
	class="rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black transition-all ease-in-out shadow shadow-orange-700 hover:bg-gradient-to-b hover:from-orange-700 hover:to-orange-400"
	class:bg-gradient-to-b={isActiveRoute}
	class:from-orange-700={isActiveRoute}
	class:to-orange-500={isActiveRoute}
>
	<slot />
</a>
