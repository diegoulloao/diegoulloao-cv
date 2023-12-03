<script>
  // Svelte
  import { blur } from "svelte/transition"

	// Components
	import { Skill, Project, Experience, Button } from "@components";

	// Libraries
	import TypedJs from "@loscrackitos/svelte-typed-js";

	// Data sources
	import skills from "@data/skills.json";
	import projects from "@data/projects.json";
	import experience from "@data/experience.json";

	// RRSS Info
	import { rrss } from "@data/info.json";

	// Seo
	import Seo from "@seo";

	// Years of experience
	const yearsExperience = Math.abs(2011 - new Date().getFullYear()) - 2;
</script>

<!-- Seo -->
<Seo />

<!-- Index Page -->
<main id="home" transition:blur={{ amount: 30, duration: 200 }}>
	<!-- Intro Section -->
	<section class="intro flex flex-col sm:flex-row mt-8 sm:mt-24 gap-10 sm:gap-14">
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
	</section>

	<!-- Skills Section -->
	<section class="skills flex justify-end mt-16 sm:mt-10">
		<div class="row-2 max-w-2xl text-right text-gray-600">
			<h3 class="text-2xl sm:text-3xl mb-4 uppercase text-gray-200 bg-title">
				&nbsp;Skills<span class="blink-animation">_</span>&nbsp;
			</h3>

			<div class="grid sm:flex grid-cols-2 skills gap-x-16 gap-y-8 sm:gap-16">
				{#each skills as s}
					<Skill skill={s} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Contributions Section -->
	<section class="projects flex mt-16 sm:mt-10">
		<div class="project-container w-full">
			<h2 class="text-2xl sm:text-3xl uppercase bg-title mb-4">
				&nbsp;Contributions<span class="blink-animation">_</span>&nbsp;
			</h2>

			<div
				class="projects-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3"
			>
				{#each projects as p}
					<Project
						repo={p.repo}
						thumbnail={p.thumbnail}
						description={p.description}
						contributor={p.contributor}
						labels={p.labels}
						url={p.url}
						classes="h-full"
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- Experience Section -->
	<section class="experience mt-12 sm:mt-5 text-right">
		<h2 class="bg-title text-2xl sm:text-3xl uppercase mb-0 sm:mb-2">
			&nbsp;Experience<span class="blink-animation">_</span>&nbsp;
		</h2>

		<!-- Desktop, Tablets: Grid -->
		<div
			class="experience-list mt-5 hidden md:grid md:grid-cols-[auto_max-content] gap-y-5 justify-end items-center"
		>
			{#each experience as e}
				<Experience
					company={e.company}
					logo={e.logo}
					period={e.period}
					position={e.position}
					location={e.location}
					type={e.type}
					description={e.description}
				/>
			{/each}
		</div>

		<!-- Mobile: Flex -->
		<div class="experience-list md:hidden mt-5 justify-end">
			{#each experience as e}
				<div class="experience-item flex flex-col mt-5">
					<Experience
						company={e.company}
						logo={e.logo}
						period={e.period}
						position={e.position}
						location={e.location}
						type={e.type}
						description={e.description}
					/>
				</div>
			{/each}
		</div>
	</section>

	<!-- Contact Page Link -->
	<div class="contact-me text-center mt-16 sm:mt-32">
		<Button text="Hire me" href="/contact" />
	</div>
</main>

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
