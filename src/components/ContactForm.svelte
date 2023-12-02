<script>
  // Components
  import { Button } from "@components"

  // Props
  export let response, clearForm

  // States
  let name, subject, message
  let sendingForm = false, submitClicked = false

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
    response = await fetch("https://formspree.io/f/mpzlzjnv", {
      method: "post",
      body: JSON.stringify({ name, subject, message }),
      headers: { "Accept": "application/json" }
    })

    // Change sendingForm status to false
    sendingForm = false
  }

  // Pass clearForm function to parent
  clearForm = () => {
    name = subject = message = response = null
    submitClicked = false
  }
</script>

<!-- Form -->
<form id="contact-form" class="w-full max-w-xl mx-auto mt-14 sm:mt-20">
  <!-- Name -->
  <div class="md:flex items-center">
    <div class="w-full flex flex-col">
      <label for="name" class="leading-none text-gray-500 text-sm sm:text-[16px]">Name</label>
      <input
        bind:value={name}
        id="name"
        name="name"
        type="text"
        class:border-red-500={submitClicked && !name}
        class:border-gray-900={!submitClicked || name}
        class="leading-none text-gray-50 p-2 sm:p-3 focus:outline-none mt-2 sm:mt-4 bg-black border caret-purple"
        data-1p-ignore
      />
    </div>
  </div>

  <!-- Subject -->
  <div class="md:flex items-center mt-6 sm:mt-8">
    <div class="w-full flex flex-col">
      <label for="subject" class="leading-none text-gray-500 text-sm sm:text-[16px]">Subject</label>
      <input
        bind:value={subject}
        id="subject"
        name="subject"
        type="text"
        class:border-red-500={submitClicked && !subject}
        class:border-gray-900={!submitClicked || subject}
        class="leading-none text-gray-50 p-2 sm:p-3 focus:outline-none mt-2 sm:mt-4 bg-black border caret-purple"
      />
    </div>
  </div>

  <!-- Message -->
  <div class="w-full flex flex-col mt-6 sm:mt-8">
    <label for="message" class="leading-none text-gray-500 text-sm sm:text-[16px]">Message</label>
    <textarea
      bind:value={message}
      id="message"
      name="message"
      type="text"
      class:border-red-500={submitClicked && !message}
      class:border-gray-900={!submitClicked || message}
      class="h-40 text-base leading-none text-gray-50 p-2 sm:p-3 focus:outline-none mt-2 sm:mt-4 bg-black border resize-none caret-purple"
    />
  </div>

  <!-- Send button -->
  <div class="text-center mt-14 sm:mt-16">
    {#if !sendingForm}
      <Button text="Send message" action={onSendForm} />
    {:else}
      <Button text="Sending..." type="freeze" action={() => false} />
    {/if}
  </div>
</form>
