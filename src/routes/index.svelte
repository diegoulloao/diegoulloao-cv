<script>
  // Components
  import { Skill, Project, Experience, Button } from "@components"

  // Data sources
  import skills from "@data/skills.json"
  import projects from "@data/projects.json"
  import experience from "@data/experience.json"

  // Years of experience
  const yearsExperience = Math.abs(2011 - new Date().getFullYear()) - 2
</script>

<!-- Head -->
<svelte:head>
  <title>Diego Ulloa - Fullstack Developer</title>
</svelte:head>

<!-- Index Page -->
<main id="home">
  <section class="intro flex flex-col sm:flex-row mt-12 sm:mt-24 gap-10 sm:gap-14">
    <div class="profile-img">
      <img src="/diego.jpg" alt="none" class="rounded-full">
    </div>

    <div class="description max-w-2xl flex flex-col justify-center text-gray-200">
      <div>
        <h2 class="text-5xl mb-3 bg-title">Diego Ulloa</h2>
      </div>

      <p class="text-gray-600">
      Fullstack Developer, Open Source contributor and Autodidact Programmer since 16 years old.
      <br /><br />
      With {yearsExperience} years of net experience accumulated today I dedicate myself to develop IT specializing in frontend applications.
      </p>

      <br />

      <p>Currently working from Chile to Overseas.</p>
    </div>
  </section>

  <section class="skills flex justify-end mt-16 sm:mt-10">
    <div class="row-2 max-w-2xl text-right text-gray-600">
      <h3 class="text-3xl mb-3 uppercase text-gray-200 bg-title">Skills</h3>

      <div class="grid sm:flex grid-cols-2 skills gap-x-16 gap-y-8 sm:gap-16">
        {#each skills as s}
          <Skill skill={s} />
        {/each}
      </div>
    </div>
  </section>

  <section class="projects flex mt-16 sm:mt-10">
    <div class="project-container w-full">
      <h2 class="text-3xl uppercase bg-title mb-4">Contributions</h2>

      <div class="projects-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
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

  <section class="experience mt-16 sm:mt-10 text-right">
    <h2 class="bg-title text-3xl uppercase">Experience</h2>

    <div class="experience list">
      {#each experience as e}
        <Experience
          company={e.company}
          logo={e.logo}
          period={e.period}
          position={e.position}
          location={e.location}
          description={e.description}
          classes="mt-8"
        />
      {/each}
    </div>
  </section>

  <div class="contact-me text-center mt-20 sm:mt-32">
    <Button text="Contact me" href="/contact" />
  </div>
</main>

<style lang="scss">
  .profile-img {
    width: 250px;

    @media only screen and (max-width: 1024) {
      width: auto;
      max-width: 250px;
    }
  }
</style>
