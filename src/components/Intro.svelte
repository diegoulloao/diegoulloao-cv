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
		class="rounded-full max-w-[230px] sm:max-w-[250px]"
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
			"absolute bottom-1 right-0 rounded-full w-7 h-7 md:hidden",
			"flex justify-center items-center bg-gray-900 hover:bg-gray-900/80 transition-colors",
			"border border-gray-800 p-0.5 select-none"
		].join(" ")}
		style="text-decoration: none"
	>
		<img src="/icons/rrss/linkedin-2.svg" alt="icon" />
	</a>

	<!-- github link mobile -->
	<a
		href={rrss.linkedin}
		target="_blank"
		class={[
			"absolute bottom-9 -right-5 rounded-full w-7 h-7 md:hidden",
			"flex justify-center items-center bg-gray-900 hover:bg-gray-900/80 transition-colors",
			"cursor-pointer border border-gray-800 p-1 select-none"
		].join(" ")}
		style="text-decoration: none"
	>
		<img src="/icons/rrss/github.svg" alt="icon" />
	</a>
</div>

<div class="description max-w-2xl flex flex-col justify-center text-gray-200">
	<div>
		<h2 class="text-3xl md:text-5xl mb-4 bg-title">
			&nbsp;Diego Ulloa<span class="blink-animation">_</span>&nbsp;
		</h2>
	</div>

	<div class="text-gray-600 text-sm sm:text-[16px] leading-6">
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
