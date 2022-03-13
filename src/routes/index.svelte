<script>
  import { Project } from "@components"
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

      <div class="flex skills gap-16">
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

        <div class="languages">
          <h4 class="text-xl mb-2">Languages</h4>
          <ul class="text-gray-200">
            <li>Typescript</li>
            <li>Javascript</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="projects flex mt-10">
    <div class="project-container w-full">
      <h2 class="text-3xl uppercase bg-title mb-3">Contributions</h2>

      <div class="projects-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        <Project
          owner="bananasplit-js"
          repo="bananasplit-js"
          thumbnail="https://bananasplit.js.org/assets/images/bananasplit-logo.png"
          description="an express.js superset template that brings to you a background to quickly develop your app"
          url="https://github.com/bananasplit-js/bananasplit-js"
          classes="h-full"
        />

        <Project
          owner="bananasplit-js"
          repo="router-dex"
          thumbnail="https://raw.githubusercontent.com/diegoulloao/router-dex/dev/public/capture.png"
          description="route and middleware inspector for express >= 4"
          url="https://github.com/bananasplit-js/router-dex"
          classes="h-full"
        />

        <Project
          owner="diegoulloao"
          repo="ioquake3-mac-install"
          thumbnail="https://github.com/diegoulloao/ioquake3-mac-install/raw/master/logo.png"
          description="install ioquake3 on macos in one command (now m1 native support)"
          url="https://github.com/diegoulloao/ioquake3-mac-install"
          classes="h-full"
        />

        <Project
          owner="diegoulloao"
          repo="ensambler-vscode-theme"
          thumbnail="https://i.imgur.com/J9jjFfp.png"
          description="a beautiful vscode theme, now available at the extension marketplace"
          url="https://github.com/diegoulloao/ensambler-vscode-theme"
          classes="h-full"
        />

        <Project
          owner="bananasplit.js"
          repo="bananasplit-client"
          thumbnail="https://bananasplit.js.org/assets/images/bananasplit-client.svg"
          description="a bananasplit-js cli for command-line"
          url="https://github.com/bananasplit-js/bananasplit-client"
          classes="h-full"
        />

        <Project
          owner="diegoulloao"
          repo="yup-es"
          thumbnail="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png"
          description="es-es locale for yup"
          url="https://github.com/diegoulloao/yup-es"
          classes="h-full"
        />

        <Project
          owner="thedenisnikulin"
          repo="vim-cyberpunk"
          thumbnail="https://github.com/thedenisnikulin/vim-cyberpunk/raw/master/screenshots/cyberpunk.png"
          description="cyberpunk colorscheme for vim, includes vim-airline and vim-lighline theme (which I contributed for)"
          url="https://github.com/thedenisnikulin/vim-cyberpunk"
          classes="h-full"
        />
      </div>
    </div>
  </div>
</main>
