<script>
	// Props
	export let text,
		action,
		href = "#!",
		type = "primary",
		target = "",
		classes = "";

	// On Click
	const onClick = (e) => {
		if (typeof action !== "function") {
			return true;
		}

		e.preventDefault();
		return action(e);
	};
</script>

<!-- Button -->
<a
	{href}
	{target}
	on:click={onClick}
	class={[
		"button px-4 py-3 transition duration-100 ease-in-out",
		"border-purple border bg-transparent font-normal text-gray-200",
		type === "freeze"
			? "border-purple border text-gray-200"
			: "hover:bg-[#ff4ecd] hover:text-black",
		classes
	].join(" ")}
>
	{text}
</a>

<style lang="scss">
	.button {
		&:hover {
			border: 1px solid $purple;
			@apply transition;
			@apply duration-100;
			@apply ease-in-out;
		}
	}
</style>
