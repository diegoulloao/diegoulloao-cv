<script>
  // Data
  import { rrss } from "@data/info.json"
</script>

<!-- Nav -->
<header class="sticky bg-black font-normal z-50 top-0 py-3 flex justify-between shadow overflow-visible">
	<nav class="flex nav-list mx-auto sm:mx-0 space-x-12 sm:space-x-14 hover:text-blue">
		<a href="/">Home</a>
		<a href="/contact">Contact</a>
		<span class="flex">
			<a
				class="text-purple no-hover border-b-2 border-purple pb-1"
				href="/diego-ulloa-resume-2024.pdf"
				download><span class="hidden sm:inline">Get</span> Resume</a
			>
			<img src="/icons/download.svg" class="relative -top-0.5 ml-2" width="16" alt="download-icon" />
		</span>
	</nav>

	<div class="social space-x-0 text-gray-600 hidden sm:inline">
		<a class="hover:text-white" href={rrss.github} target="__blank"> Github </a>

		<span> | </span>

		<a class="hover:text-white" href={rrss.linkedin} target="__blank">
			Linkedin
		</a>
	</div>
</header>
