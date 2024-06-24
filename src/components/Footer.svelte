<script>
	// Data
	import { rrss } from "@data/info.json";
</script>

<!-- Footer -->
<footer
	class={[
		"footer flex flex-col justify-center gap-y-6 text-center text-gray-700 sm:gap-y-9",
		"mb-14 mt-24 sm:mt-32"
	].join(" ")}
>
	<div class="rrss-container flex justify-center space-x-3">
		<!-- x -->
		<a href={rrss.x} target="_blank">
			<img
				class="w-4 transition-opacity duration-100 hover:opacity-80"
				src="/icons/rrss/x.svg"
				loading="lazy"
				alt="x-icon"
			/>
		</a>

		<!-- github -->
		<a href={rrss.github} target="_blank">
			<img
				class="w-4 transition-opacity duration-100 hover:opacity-80"
				src="/icons/rrss/github.svg"
				loading="lazy"
				alt="github-icon"
			/>
		</a>

		<!-- linkedin -->
		<a href={rrss.linkedin} target="_blank">
			<img
				class="relative transition-opacity duration-100 hover:opacity-80"
				style="width: 22px; top: -2.7px"
				loading="lazy"
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
