<script>
	const onScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
</script>

<div
	id="scroll-top-button"
	class={[
		"rounded-full border border-gray-800 w-11 h-11 sm:w-10 sm:h-10 bg-black select-none cursor-pointer",
		"fixed bottom-0 right-0 mr-5 mb-5 sm:mr-4 sm:mb-4 flex justify-center items-center shadow-sm z-50",
		"transition ease-in-out active:bg-white active:border-gray-200 group hover:bg-gray-900"
	].join(" ")}
	on:click={onScrollTop}
>
	<div
		class="flex justify-center w-4 relative bottom-0 xl:group-hover:bottom-0.5 transition-all duration-200"
	>
		<img src="/icons/chevron-up.svg" alt="chevron-up" />
	</div>
</div>
