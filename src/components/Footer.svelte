<script>
	// Data
	import { rrss } from "@data/info.json";
</script>

<!-- Footer -->
<footer
	class={[
		"footer flex flex-col justify-center gap-y-6 sm:gap-y-9 text-gray-700 text-center",
		"mt-24 sm:mt-32 mb-10"
	].join(" ")}
>
	<div class="rrss-container flex space-x-3 justify-center">
		<!-- x -->
		<a href={rrss.x} target="_blank">
			<img
				class="w-4 hover:opacity-80 transition-opacity duration-100"
				src="/icons/rrss/x.svg"
				alt="x-icon"
			/>
		</a>

		<!-- github -->
		<a href={rrss.github} target="_blank">
			<img
				class="w-4 hover:opacity-80 transition-opacity duration-100"
				src="/icons/rrss/github.svg"
				alt="github-icon"
			/>
		</a>

		<!-- linkedin -->
		<a href={rrss.linkedin} target="_blank">
			<img
				class="hover:opacity-80 transition-opacity duration-100 relative"
				style="width: 22px; top: -2.7px"
				src="/icons/rrss/linkedin.svg"
				alt="linkedin-icon"
			/>
		</a>
	</div>

	<!-- copyright -->
	<div class="copyright-container">
		<span class="font-normal">Copyright&copy; {new Date().getFullYear()}</span>
		<br />
		<span class="text-xs">Made with SvelteKit</span>
	</div>
</footer>
