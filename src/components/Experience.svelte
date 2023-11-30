<script>
  // Props
  export let
    company,
    logo,
    period,
    position,
    location,
    description
</script>

<!-- Experience -->
<div
	class={[
		"experience-description w-full",
		"md:border-r md:border-gray-900 xl:-mr-8 sm:pr-8 lg:pr-12"
	].join(" ")}
>
	<p
		class="w-full text-sm xl:max-w-3xl text-gray-500 border-b border-gray-900 pb-8 md:pb-0 md:border-0"
	>
		{description}
	</p>
</div>

<div
	class={[
		"experience-head flex justify-end items-center mb-4 sm:mt-0",
		"w-full pl-8 order-first md:order-none"
	].join(" ")}
>
	<div class="experience-main mr-4 sm:mr-2 lg:mr-4">
		<div class="experience-title text-lg text-gray-200">
			{company} <span class="text-sm">[{period}]</span>
		</div>

		<div class="experience-position text-gray-500 uppercase">
			{position}
		</div>

		<div class="experience-location text-sm text-gray-700">
			{location}
		</div>
	</div>

	<div class="experience-img w-14 lg:w-18">
		<img src={logo} alt="" />
	</div>
</div>
