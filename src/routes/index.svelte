<script>
  // Transitions
  import { fly } from "svelte/transition"

  // Variables
  let showPresentation = false

  setTimeout(() => showPresentation = true, 300)
</script>

<!-- Head -->
<svelte:head>
  <title>Diego Ulloa</title>
</svelte:head>

<!-- Home Page -->
<main id="intro" class="flex-grow flex flex-col justify-center">
  <!-- Presentation -->
  {#if showPresentation}
    <section class="flex gap-x-20" transition:fly="{{ y: -200, duration: 2000 }}">
      <!-- Profile -->
      <div class="rounded-full bg-gradient-primary p-1.5">
        <img src="/diego.jpg" class="rounded-full" style="width:550px" alt="diego">
      </div>

      <!-- Presentation -->
      <div class="presentation flex flex-col justify-center">
        <!-- Title -->
        <h1 class="text-7xl font-semibold">Diego Ulloa</h1>
        <h3 class="text-3xl text-gray-500 mt-3">Fullstack Developer.</h3>

        <div class="mt-8 text-gray-500 space-y-4">
          <p>
            I'm a Fullstack Developer and Autodidact Programmer since my 16 years old. With 8 years of experience accumulated today I dedicate myself to develop TI technologies specializing in frontend applications.
          </p>

          <p>
            Currently working from Chile to Overseas.
          </p>
        </div>
      </div>
    </section>
  {/if}

  <div class="fixed py-8 flex justify-center bottom-0 right-0 left-0">
    <a href="/home" class="hover:text-cyan">- Read more -</a>
  </div>

  <!-- Hidden: for preload image -->
  <img src="/diego.jpg" alt="none" class="hidden">
  <!-- Hidden -->
</main>
