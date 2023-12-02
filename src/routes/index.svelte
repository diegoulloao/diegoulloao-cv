<script>
	// Components
	import { Skill, Project, Experience, Button } from "@components";

	// Data sources
	import skills from "@data/skills.json";
	import projects from "@data/projects.json";
	import experience from "@data/experience.json";

	// Seo
	import Seo from "@seo";

	// Years of experience
	const yearsExperience = Math.abs(2011 - new Date().getFullYear()) - 2;
</script>

<!-- Seo -->
<Seo />

<!-- Index Page -->
<main id="home">
	<!-- Intro Section -->
	<section class="intro flex flex-col sm:flex-row mt-12 sm:mt-24 gap-10 sm:gap-14">
		<div class="profile-img relative">
			<img src="/diego.jpg" alt="none" class="rounded-full max-w-[230px] sm:max-w-[250px]" />

			<!-- chilean flag -->
			<div
				class={[
					"absolute top-2 left-1 rounded-full w-10 h-10",
					"flex items-center bg-gray-900 text-[26px]",
					"cursor-pointer border border-gray-800 hover:w-20",
					"pl-1.5 transition-all group"
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

				<p class="text-gray-200">Currently working remotely for overseas companies.</p>
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
