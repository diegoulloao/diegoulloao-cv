<script>
  // Components
  import { Button } from "@components"

  // Actions
  const onSendForm = async () => {
    // Contact form DOM
    const form = document.getElementById("contact-form")

    // Contact form data
    const formData = new FormData(form)

    // Send form to FormSpree
    const response = await fetch("https://formspree.io/f/mpzlzjnv", {
      method: "post",
      body: formData,
      headers: { "Accept": "application/json" }
    })

    console.log(response)

    return false
  }
</script>

<!-- Head -->
<svelte:head>
  <title>Diego Ulloa - Let's get in touch</title>
</svelte:head>

<!-- Contact Page -->
<main id="contact" class="gap-y-16">
  <!-- Title -->
  <h2 class="text-3xl text-gray-200 mt-12 text-center">
    Let's get in touch <span class="text-purple">_</span>
  </h2>

  <!-- Form -->
  <form id="contact-form" class="w-full max-w-xl mx-auto mt-20">
    <!-- Name -->
    <div class="md:flex items-center">
      <div class="w-full flex flex-col">
        <label for="name" class="leading-none text-gray-500">Name</label>
        <input
          required
          id="name"
          type="text"
          class="leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border border-gray-800 caret-purple"
        />
      </div>
    </div>

    <!-- Subject -->
    <div class="md:flex items-center mt-8">
      <div class="w-full flex flex-col">
        <label for="subject" class="leading-none text-gray-500">Subject</label>
        <input
          required
          id="subject"
          type="text"
          class="leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border border-gray-800 caret-purple"
        />
      </div>
    </div>

    <!-- Message -->
    <div class="w-full flex flex-col mt-8">
      <label for="message" class="leading-none text-gray-500">Message</label>
      <textarea
        required
        id="message"
        type="text"
        class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border-gray-800 border resize-none caret-purple"
      />
    </div>

    <!-- Send button -->
    <div class="text-center mt-16">
      <Button text="Send message" action={onSendForm} />
    </div>
  </form>
</main>
