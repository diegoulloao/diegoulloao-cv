<script>
	// Svelte
	import { page } from "$app/stores";

	// Data
	import { rrss } from "@data/info.json";
</script>

<!-- Nav -->
<header
	class={[
		"sticky top-0 z-50 mx-auto mt-8 flex justify-between overflow-visible bg-black/75 px-3",
		"py-3 font-normal shadow-md backdrop-blur-2xl sm:px-4 md:px-24 lg:px-16 xl:px-20"
	].join(" ")}
>
	<nav class="nav-list mx-auto flex space-x-12 sm:mx-0 sm:space-x-14 sm:pl-8">
		<a data-sveltekit-noscroll href="/" class={$page.url.pathname !== "/" ? "text-gray-500" : null}
			>Home</a
		>
		<a
			data-sveltekit-noscroll
			href="/contact"
			class={$page.url.pathname !== "/contact" ? "text-gray-500" : null}
		>
			Contact
		</a>

		<span class="flex">
			<a
				class="text-purple no-hover border-purple border-b-2 pb-1"
				href="/diego-ulloa-resume-2024.pdf"
				download><span class="hidden sm:inline">Get</span> Resume</a
			>
			<img
				src="/icons/download.svg"
				class="relative -top-0.5 ml-2"
				width="16"
				alt="download-icon"
			/>
		</span>
	</nav>

	<div class="social hidden space-x-0 text-gray-600 sm:inline sm:pr-8">
		<a class="hover:text-white" href={rrss.github} target="__blank"> Github </a>

		<span> | </span>

		<a class="hover:text-white" href={rrss.linkedin} target="__blank"> Linkedin </a>
	</div>
</header>
