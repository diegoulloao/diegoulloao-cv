<script>
  // Components
  import { Button } from "@components"

  // Form States
  let form, sendingForm = false, submitClicked = false
  let name, subject, message

  // Actions
  const onSendForm = async () => {
    // Change submit clicked state to true
    if (!submitClicked) submitClicked = true

    // Escape if form values are not filled
    if (!name || !subject || !message) {
      return false
    }

    // Change sendingForm state to true
    sendingForm = true

    // Send form to FormSpree
    /*const response = await fetch("https://formspree.io/f/mpzlzjnv", {
      method: "post",
      body: { name, subject, message },
      headers: { "Accept": "application/json" }
    })*/

    // TODO: remove
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = { ok: true }

    // Change sendingForm status to false
    sendingForm = false

    // User output
    if (response.ok) {
      console.log("sent!")

    } else {
      console.log("error...")
    }
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
  <form bind:this={form} id="contact-form" class="w-full max-w-xl mx-auto mt-20">
    <!-- Name -->
    <div class="md:flex items-center">
      <div class="w-full flex flex-col">
        <label for="name" class="leading-none text-gray-500">Name</label>
        <input
          bind:value={name}
          id="name"
          name="name"
          type="text"
          class:border-red-500={submitClicked && !name}
          class="leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border border-gray-800 caret-purple"
        />
      </div>
    </div>

    <!-- Subject -->
    <div class="md:flex items-center mt-8">
      <div class="w-full flex flex-col">
        <label for="subject" class="leading-none text-gray-500">Subject</label>
        <input
          bind:value={subject}
          id="subject"
          name="subject"
          type="text"
          class:border-red-500={submitClicked && !subject}
          class="leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border border-gray-800 caret-purple"
        />
      </div>
    </div>

    <!-- Message -->
    <div class="w-full flex flex-col mt-8">
      <label for="message" class="leading-none text-gray-500">Message</label>
      <textarea
        bind:value={message}
        id="message"
        name="message"
        type="text"
        class:border-red-500={submitClicked && !message}
        class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none mt-4 bg-black border-gray-800 border resize-none caret-purple"
      />
    </div>

    <!-- Send button -->
    <div class="text-center mt-16">
      {#if !sendingForm}
        <Button text="Send message" action={onSendForm} />
      {:else}
      <Button text="Sending..." type="freeze" action={() => false} />
      {/if}
    </div>
  </form>
</main>
