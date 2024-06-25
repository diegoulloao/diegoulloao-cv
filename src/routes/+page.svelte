<script>
	// Svelte
	import { blur } from "svelte/transition";

	// Components
	import { Intro, Skill, Project, Experience, Button, Sponsor } from "@components";

	// Data sources
	import skills from "@data/skills.json";
	import projectsData from "@data/projects.json";
	import experience from "@data/experience.json";

	// Seo
	import Seo from "@seo";

	// SSR Data
	export let data;
	console.log({ data });

	// Constants
	const authorRegex = /^https:\/\/github.com\/(diegoulloao|bananasplit-js)/;

	// States
	let projectsChoice = "author";

	// Reactive
	$: projects = projectsData.filter((p) => {
		const queue = authorRegex.test(p.url);
		return projectsChoice === "author" ? queue : !queue;
	});
</script>

<!-- Seo -->
<Seo />

<!-- Index Page -->
<main id="home" transition:blur={{ amount: 30, duration: 200 }}>
	<!-- Intro Section -->
	<section class="intro mt-8 flex flex-col gap-10 sm:mt-24 sm:flex-row sm:gap-14">
		<Intro />
	</section>

	<!-- Skills Section -->
	<section class="skills mt-16 flex justify-end sm:mt-10">
		<div class="row-2 text-right text-gray-600">
			<h3 class="bg-title mb-4 text-2xl uppercase text-gray-200 sm:text-3xl">
				&nbsp;Skills<span class="blink-animation">_</span>&nbsp;
			</h3>

			<div class="skills grid grid-cols-2 gap-x-16 gap-y-8 sm:flex sm:gap-16">
				{#each skills as s}
					<Skill skill={s} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Contributions Section -->
	<section class="projects mt-16 flex sm:mt-10">
		<div class="project-container w-full">
			<h2 class="bg-title text-2xl uppercase sm:text-3xl">
				&nbsp;Contributions<span class="blink-animation">_</span>&nbsp;
			</h2>

			<div class="my-4 flex space-x-3 text-sm text-gray-500 lg:space-x-6">
				<button
					type="button"
					class:text-white={projectsChoice === "author"}
					on:click={() => (projectsChoice = "author")}
				>
					[author]
				</button>

				<button
					type="button"
					class:text-white={projectsChoice === "contributor"}
					on:click={() => (projectsChoice = "contributor")}
				>
					[contributor]
				</button>
			</div>

			<div
				class="projects-list grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
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
	<section class="experience mt-12 text-right sm:mt-5">
		<h2 class="bg-title mb-0 text-2xl uppercase sm:mb-2 sm:text-3xl">
			&nbsp;Experience<span class="blink-animation">_</span>&nbsp;
		</h2>

		<!-- Desktop, Tablets: Grid -->
		<div
			class="experience-list mt-5 hidden items-center justify-end gap-y-5 md:grid md:grid-cols-[auto_max-content]"
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
		<div class="experience-list mt-5 justify-end md:hidden">
			{#each experience as e}
				<div class="experience-item mt-5 flex flex-col">
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

	{#if !!data.sponsors?.length}
		<div
			class="border-purple m-auto mt-3 h-24 w-1 border-l-2 border-dashed opacity-40 lg:mt-10 lg:h-36"
		/>

		<section class="sponsors mt-8 flex flex-col items-center space-y-6 lg:mt-10">
			<p class="text-purple text-xl font-normal">[Sponsors]</p>

			<p class="max-w-[700px] text-center text-[16px] text-gray-200">
				I'm grateful to my GitHub sponsors whose generous support drives my progress. Thank you for
				being part of my journey! ✨
			</p>

			<div class="grid max-w-[1024px] grid-cols-1 gap-3 pt-2 sm:grid-cols-2 md:grid-cols-3">
				{#each data.sponsors as sponsor}
					<Sponsor {sponsor} />
				{/each}

				<!-- Sponsor me button -->
				<Sponsor
					noUser
					href="https://github.com/sponsors/diegoulloao"
					sponsor={{
						name: "sponsor me",
						avatar: "/heart-emoji.png"
					}}
				/>
			</div>
		</section>
	{/if}

	<!-- Contact Page Link -->
	<div class="contact-me mt-16 text-center sm:mt-32">
		<Button text="Hire me" href="/contact" />
	</div>
</main>
