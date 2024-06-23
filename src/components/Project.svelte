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
<div class="project-card relative">
	<!-- Card -->
	<a
		class="{classes} relative grid w-auto content-between border border-gray-900 p-6 duration-100"
		href={url}
		target="_blank"
	>
		<!-- Share Icon -->
		<div class="absolute right-1 top-1 z-10 bg-gray-900 p-1.5">
			<img src="/icons/share.svg" class="w-2.5 opacity-20 duration-100" alt="share-icon" />
		</div>

		<!-- Header -->
		<div class="project top">
			<div class="flex flex-row">
				<img src={thumbnail} fetchpriority="low" class="w-8" alt="" />

				<div class="ml-3 flex flex-col justify-center">
					<div class="flex">
						<span class="font-semibold text-gray-200">
							{repo}
							{#if contributor}<img
									src="/icons/github-pr.svg"
									class="relative -mr-2.5 inline w-4"
									style="top: -2px;"
									alt="pr"
								/>{/if}
						</span>

						{#if contributor}
							<span class="text-purple relative top-1 ml-4 flex gap-x-0.5 text-xs font-normal">
								[contributor]
							</span>
						{/if}
					</div>
				</div>
			</div>

			<!-- Content -->
			<p class="mt-3 w-auto max-w-sm text-sm text-gray-600">
				{description}
			</p>
		</div>

		<!-- Labels -->
		{#if labels.length}
			<div class="project-bottom relative bottom-0 mt-3 sm:mt-4">
				{#each labels as l}
					<Label text={l} classes="mr-3" />
				{/each}
			</div>
		{/if}
	</a>
</div>
