<script>
	// Svelte
	import { onMount } from "svelte";

	// Constants
	const OFFSET_SCROLL = 200;

	// References
	let scrollButtonRef;

	// States
	let scrollPorcentage = "0%";

	const onScrollTopClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// source: https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
	const getScrollPercent = () => {
		const h = document.documentElement;
		const b = document.body;
		const st = "scrollTop";
		const sh = "scrollHeight";

		let percent = Math.floor(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);

		if (percent < 0) return "0%";
		if (percent > 100) return "100%";
		return percent + "%";
	};

	const onPageScroll = () => {
		// set scroll porcentage
		scrollPorcentage = getScrollPercent();

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
		"h-11 w-11 cursor-pointer select-none rounded-full border border-gray-800 bg-black sm:h-10 sm:w-10",
		"fixed bottom-0 right-0 z-50 mb-6 mr-6 flex items-center justify-center shadow-sm sm:mb-4 sm:mr-4",
		"group transition ease-in-out active:border-gray-200 active:!bg-gray-200 xl:hover:bg-gray-900",
		"translate-y-10 opacity-0"
	].join(" ")}
	on:click={onScrollTopClick}
	role="button"
	tabindex="0"
>
	<div
		class="relative bottom-0 flex w-4 justify-center transition-all duration-200 xl:group-hover:bottom-0.5"
	>
		<img src="/icons/chevron-up.svg" loading="lazy" fetchpriority="low" alt="chevron-up" />
	</div>
</div>

<!-- scroll porcentage -->
<div
	class="fixed bottom-0 left-0 z-50 bg-gray-900 px-2 py-1 text-sm font-light text-gray-200 shadow"
>
	{scrollPorcentage}
</div>
