<script>
	// Svelte
	import { onMount } from "svelte";

	// Constants
	const OFFSET_SCROLL = 200;

	// References
	let scrollButtonRef;

	// States
	let scrollPorcentage = 0;

	const onScrollTopClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// source: https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
	const getScrollPercent = () => {
		const h = document.documentElement;
		const b = document.body;
		const st = "scrollTop";
		const sh = "scrollHeight";

		return Math.floor(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
	};

	const onPageScroll = () => {
		// set scroll porcentage
		scrollPorcentage = getScrollPercent() + "%";

		if (window.scrollY <= OFFSET_SCROLL) {
			if (scrollButtonRef.classList.contains("opacity-0")) return;

			scrollButtonRef.classList.remove("opacity-1", "translate-y-0");
			scrollButtonRef.classList.add("opacity-0", "translate-y-10");
		} else {
			if (!scrollButtonRef.classList.contains("opacity-0")) return;

			scrollButtonRef.classList.remove("opacity-0", "translate-y-10");
			scrollButtonRef.classList.add("opacity-1", "translate-y-0");
		}
	};

	onMount(() => {
		window.addEventListener("scroll", onPageScroll);
		return () => window.removeEventListener("scroll", onPageScroll);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	bind:this={scrollButtonRef}
	id="scroll-top-button"
	class={[
		"rounded-full border border-gray-800 w-11 h-11 sm:w-10 sm:h-10 bg-black select-none cursor-pointer",
		"fixed bottom-0 right-0 mr-6 mb-6 sm:mr-4 sm:mb-4 flex justify-center items-center shadow-sm z-50",
		"transition ease-in-out active:border-gray-200 group xl:hover:bg-gray-900 active:!bg-gray-200",
		"opacity-0 translate-y-10"
	].join(" ")}
	on:click={onScrollTopClick}
>
	<div
		class="flex justify-center w-4 relative bottom-0 xl:group-hover:bottom-0.5 transition-all duration-200"
	>
		<img src="/icons/chevron-up.svg" alt="chevron-up" />
	</div>
</div>

<!-- scroll porcentage -->
<div class="fixed z-50 left-0 bottom-6 mb-1 sm:bottom-4 p-2 bg-purple text-black text-sm font-light">
	{scrollPorcentage}
</div>
