<script>
  // Components
  import { ContactForm } from "@components"

  // Seo
  import Seo from "@seo"

  // States
  let response, clearForm
</script>

<!-- Seo -->
<Seo title="Diego Ulloa - Let's get in touch" />

<!-- Contact Page -->
<main id="contact" class="gap-y-16">
  <!-- Title -->
  <h2 class="text-3xl text-gray-200 mt-12 text-center">
    Let's get in touch <span class="text-purple">_</span>
  </h2>

  {#if !response}
    <!-- Form -->
    <ContactForm bind:response bind:clearForm />

  {:else if response.ok === false}
    <h3 class="text-3xl text-gray-200 text-center mt-20">
      Error :(
    </h3>

    <button on:click={clearForm} class="block w-full text-gray-700 text-sm text-center mt-16">
      try again
    </button>

  {:else}
    <div class="contact-success">
      <h3 class="text-3xl text-gray-200 text-center mt-20">
        Success
      </h3>

      <button on:click={clearForm} class="block w-full text-gray-700 text-sm text-center mt-16">
        retry
      </button>
    </div>
  {/if}
</main>
