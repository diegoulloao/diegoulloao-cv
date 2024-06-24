<script>
	// Libraries
	import TypedJs from "@loscrackitos/svelte-typed-js";

	// RRSS Info
	import { rrss } from "@data/info.json";

	// Years of experience
	const yearsExperience = Math.abs(2011 - new Date().getFullYear()) - 2;
</script>

<div class="profile-img relative">
	<img
		src="/diego.jpg"
		fetchpriority="high"
		alt="none"
		class="max-w-[230px] rounded-full sm:max-w-[250px]"
	/>

	<!-- chilean flag -->
	<div
		class={[
			"absolute top-0 left-2 rounded-full w-10 h-10",
			"flex items-center bg-gray-900 text-[26px]",
			"cursor-pointer border border-gray-800 hover:w-20",
			"pl-1.5 transition-all group flag-on-load"
		].join(" ")}
	>
		🇨🇱
		<span
			class={[
				"ml-1 opacity-0 group-hover:opacity-100 text-xs text-white",
				"transition-opacity ease-out"
			].join(" ")}
		>
			Chile
		</span>
	</div>

	<!-- linkedin link mobile -->
	<a
		href={rrss.github}
		target="_blank"
		class={[
			"absolute bottom-1 right-0 h-7 w-7 rounded-full md:hidden",
			"flex items-center justify-center bg-gray-900 transition-colors hover:bg-gray-900/80",
			"select-none border border-gray-800 p-0.5"
		].join(" ")}
		style="text-decoration: none"
	>
		<img src="/icons/rrss/linkedin-2.svg" loading="lazy" alt="icon" />
	</a>

	<!-- github link mobile -->
	<a
		href={rrss.linkedin}
		target="_blank"
		class={[
			"absolute -right-5 bottom-9 h-7 w-7 rounded-full md:hidden",
			"flex items-center justify-center bg-gray-900 transition-colors hover:bg-gray-900/80",
			"cursor-pointer select-none border border-gray-800 p-1"
		].join(" ")}
		style="text-decoration: none"
	>
		<img src="/icons/rrss/github.svg" loading="lazy" alt="icon" />
	</a>
</div>

<div class="description flex max-w-2xl flex-col justify-center text-gray-200">
	<div>
		<h2 class="bg-title mb-4 text-3xl md:text-5xl">
			&nbsp;Diego Ulloa<span class="blink-animation">_</span>&nbsp;
		</h2>
	</div>

	<div class="text-sm leading-6 text-gray-600 sm:text-[16px]">
		<p>
			Experienced Fullstack Developer with a passion for Open Source contributions. Self-taught
			coder since age 16.
		</p>

		<br />

		<p>
			Bringing {yearsExperience} years of experience, I'm dedicated to helping companies build their
			products, with a primary focus on Frontend development.
		</p>

		<br />

		<div class="profile-typing-container min-h-[48px] lg:min-h-full">
			<TypedJs
				loop
				backDelay={3000}
				typeSpeed={40}
				strings={["Currently working remotely for overseas companies."]}
			>
				<span class="typing text-gray-200" />
			</TypedJs>
		</div>
	</div>
</div>

<style lang="scss">
	.profile-img {
		width: 250px;

		@media only screen and (max-width: 1024px) {
			width: auto;
			max-width: 250px;
		}

		@media only screen and (max-width: 640px) {
			width: auto;
			max-width: 230px !important;
		}
	}
</style>
