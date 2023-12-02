<script>
	// Components
	import { Label } from "@components";

	// Props
	export let description,
		repo,
		url = "#!",
		labels = [],
		classes = "",
		contributor = false,
		thumbnail = "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png";
</script>

<!-- Project -->
<div class="project-card relative group">
	<!-- Card -->
	<a
		class="grid content-between relative w-auto border border-gray-900 p-6 group-hover:bg-gray-900 duration-100 {classes}"
		href={url}
		target="_blank"
	>
		<!-- Share Icon -->
		<div class="absolute right-1 top-1 bg-gray-900 p-1.5 z-10 group-hover:bg-gray-700">
			<img
				src="/icons/share.svg"
				class="w-2.5 opacity-20 group-hover:opacity-50 transition-opacity duration-100"
				alt="share-icon"
			/>
		</div>

		<!-- Header -->
		<div class="project top">
			<div class="flex flex-row">
				<img src={thumbnail} class="w-8" alt="" />

				<div class="ml-3 flex flex-col justify-center">
					<div class="flex">
						<span class="text-gray-200 font-semibold">{repo}</span>
						{#if contributor}
							<span class="ml-4 relative top-1 text-purple text-xs font-normal">[contributor]</span>
						{/if}
					</div>
				</div>
			</div>

			<!-- Content -->
			<p class="text-sm text-gray-600 mt-3 w-auto max-w-sm">
				{description}
			</p>
		</div>

		<!-- Labels -->
		{#if labels.length}
			<div class="project-bottom relative bottom-0 mt-3">
				{#each labels as l}
					<Label text={l} classes="mr-3" />
				{/each}
			</div>
		{/if}
	</a>
</div>
