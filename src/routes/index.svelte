<script>
  import { Card } from "@components"
</script>

<!-- Head -->
<svelte:head>
  <title>Diego Ulloa</title>
</svelte:head>

<!-- Index Page -->
<main id="intro">
  <div class="row-1 flex mt-24 gap-14">
    <div class="profile-img" style="width:auto;max-width:250px">
      <img src="/diego.jpg" alt="none" class="rounded-full">
    </div>

    <div class="description max-w-2xl flex flex-col justify-center text-gray-200">
      <div>
        <h2 class="text-5xl mb-3 bg-title">Diego Ulloa</h2>
      </div>

      <p class="text-gray-600">
        Fullstack Developer and Autodidact Programmer since my 16 years old.
        <br />
        With 8 years of experience accumulated today I dedicate myself to develop TI technologies specializing in frontend applications.
      </p>

      <br />

      <p>Currently working from Chile to Overseas.</p>
    </div>
  </div>

  <div class="skills flex justify-end mt-10">
    <div class="row-2 max-w-2xl text-right text-gray-600">
      <h3 class="text-3xl mb-3 uppercase text-gray-200 bg-title">Skills</h3>

      <div class="flex skills gap-24">
        <div class="front-end">
          <h4 class="text-xl mb-2">Frontend</h4>
          <ul class="text-gray-200">
            <li>React</li>
            <li>Next.js</li>
            <li>Gatsby</li>
            <li>Svelte</li>
          </ul>
        </div>

        <div class="back-end">
          <h4 class="text-xl mb-2">Backend</h4>
          <ul class="text-gray-200">
            <li>Node.js</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div class="others">
          <h4 class="text-xl mb-2">Others</h4>
          <ul class="text-gray-200">
            <li>Jest</li>
            <li>Playwright</li>
            <li>Git/Github</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="projects flex mt-10">
    <div class="max-w-2xl">
      <h2 class="text-3xl uppercase bg-title mb-3">Contributions</h2>

      <Card
        owner="bananasplit-js"
        repo="bananasplit-js"
        thumbnail="https://bananasplit.js.org/assets/images/bananasplit-logo.png"
        description="an express.js superset template that brings to you a background to quickly develop your app"
        url="https://github.com/bananasplit-js/bananasplit-js"
      />
    </div>
  </div>
</main>
