<script>
	// Props
	export let company, logo, period, position, location, type, description;
</script>

<!-- Experience -->
<div
	class={[
		"experience-description w-full",
		"sm:pr-8 md:border-r-2 md:border-gray-900 xl:-mr-8"
	].join(" ")}
>
	<p
		class="w-full border-b border-gray-900 pb-8 text-sm text-gray-600 md:border-0 md:pb-0 xl:max-w-3xl"
	>
		{description}
	</p>
</div>

<div
	class={[
		"experience-head mb-4 flex items-center justify-end sm:mt-0",
		"order-first w-full pl-8 md:order-none"
	].join(" ")}
>
	<div class="experience-main mr-4 sm:mr-2 lg:mr-4">
		<div class="experience-title text-lg font-normal text-gray-200">
			{company} <span class="text-sm">[{period}]</span>
		</div>

		<div class="experience-position text-sm uppercase text-gray-500">
			{position}
		</div>

		<div class="experience-location text-sm text-gray-700">
			{#if type}
				<img src={`/icons/${type}.svg`} class="relative -top-0.5 left-0 inline w-3.5" alt="icon" />
			{/if}

			{location}
		</div>
	</div>

	<div class="experience-img lg:w-18 border-purple w-14">
		<img src={logo} alt="" />
	</div>
</div>
