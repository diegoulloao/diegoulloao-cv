<script>
  // Transitions
  import { fade } from "svelte/transition"

  // Store
  import { showVideoBackground } from "@stores/app.js"

  // Background Video
  showVideoBackground.set(false)
</script>

<main id="intro" class="flex-grow flex flex-col justify-center gap-y-16" transition:fade>
  <div class="flex gap-x-32">
    <!-- Experience -->
    <section class="experience border">
      <!-- Title -->
      <h1 class="text-6xl font-semibold mb-10">Expertise</h1>

      <!-- Profile -->
      <!--<div class="rounded-full w-52 bg-gradient-primary">-->
      <!--<img src="/diego.jpg" class="rounded-full w-auto" alt="diego">-->
      <!--</div>-->

      <!-- Description -->
      <p>
        Fullstack Developer since 16 years old. Currently working at LNRD.io as Frontend.
        <br />
        Expertise in:
      </p>

      <!-- Skills -->
      <ul class="mt-8 dash-list">
        <li>React</li>
        <li>Next.js</li>
        <li>Gatsby</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
    </section>

    <!-- Projects -->
    <section class="projects border">
      <h1 class="text-6xl font-semibold">Projects</h1>
    </section>
  </div>
</main>
