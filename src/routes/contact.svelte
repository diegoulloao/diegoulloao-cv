<script>
  // Components
  import { Button } from "@components"
</script>

<!-- Head -->
<svelte:head>
  <title>Diego Ulloa - Fullstack Developer</title>
</svelte:head>

<!-- Contact Page -->
<main id="contact" class="gap-y-16">
  <!-- Title -->
  <h2 class="text-3xl text-gray-200 mt-12 text-center">
    Let's get in touch _
  </h2>

  <!-- Form -->
  <form action="" method="post" class="w-full max-w-xl mx-auto mt-20">
    <!-- Name -->
    <div class="md:flex items-center">
      <div class="w-full flex flex-col">
        <label for="name" class="leading-none text-gray-500">Name</label>
        <input id="name" type="text" class="leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border border-gray-800 caret-purple" />
      </div>
    </div>

    <!-- Subject -->
    <div class="md:flex items-center mt-8">
      <div class="w-full flex flex-col">
        <label for="subject" class="leading-none text-gray-500">Subject</label>
        <input id="subject" type="text" class="leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border border-gray-800 caret-purple"/>
      </div>
    </div>

    <!-- Message -->
    <div class="w-full flex flex-col mt-8">
      <label for="message" class="leading-none text-gray-500">Message</label>
      <textarea id="message" type="text" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border-gray-800 border resize-none caret-purple"></textarea>
    </div>

    <!-- Send button -->
    <div class="flex items-center justify-center w-full">
      <Button text="Send message" classes="mt-12" />
    </div>
  </form>
</main>
