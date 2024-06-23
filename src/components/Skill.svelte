<script>
	// Props
	export let skill;
</script>

<!-- Skill -->
<div>
	<h4 class="mb-0 text-xl font-normal text-gray-600 sm:mb-1 sm:text-[22px]">
		{#if skill.title || skill.title !== ""}
			{skill.title}
		{:else}
			<span class="invisible">_</span>
		{/if}
	</h4>

	<ul class="text-sm leading-6 text-gray-200 sm:text-[16px]">
		{#each skill.items as i}
			<li>{i}</li>
		{/each}
	</ul>
</div>
