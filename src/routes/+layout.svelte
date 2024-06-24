<script>
	// Svelte
	import { page } from "$app/stores";

	// Components
	import { Header, Footer, ScrollTop } from "@components";

	// Global Styles
	import "@styles/app.scss";

	// Pages without scroll button
	const noScrollPaths = ["/contact"];
</script>

<!-- Sticky Nav Menu -->
<Header />

<!-- Container -->
<div
	class={[
		"container relative z-30 mx-auto flex min-h-screen flex-col pb-8",
		"px-3 md:px-4 lg:px-6 xl:px-0"
	].join(" ")}
>
	<!-- Page Content -->
	<slot />

	<!-- Footer -->
	<Footer />

	<!-- Extra Elements -->
	{#if !noScrollPaths.includes($page.route.id)}
		<ScrollTop />
	{/if}
</div>
