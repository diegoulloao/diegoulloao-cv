<script>
	// Props
	export let sponsor;
	export let noUser = false;
	export let href = undefined;

	// Values
	const profileUrl = sponsor.user ? `https://github.com/${sponsor.user}` : "#!";
</script>

<a
	href={href ?? profileUrl}
	target={(href ?? profileUrl) !== "#!" ? "_blank" : "_self"}
	class="border border-gray-900 hover:border-[#ff4ecd]"
>
	<div class="p-4">
		<div class="flex items-center space-x-4">
			<img src={sponsor.avatar} alt="Sponsor Avatar" width={48} height={48} class="rounded-full" />

			<div>
				<h3 class="text-lg font-semibold">{sponsor.name ?? sponsor.user}</h3>

				{#if sponsor.user}
					<p class="text-gray-600">{!noUser ? "@" : ""}{sponsor.user}</p>
				{/if}
			</div>
		</div>
	</div>
</a>
