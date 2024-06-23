<script>
	// Svelte
	import { blur } from "svelte/transition";

	// Components
	import { ContactForm } from "@components";

	// Seo
	import Seo from "@seo";

	// States
	let response, clearForm;
</script>

<!-- Seo -->
<Seo title="Diego Ulloa - Let's get in touch" />

<!-- Contact Page -->
<main id="contact" class="gap-y-16" transition:blur={{ amount: 30, duration: 200 }}>
	<!-- Title -->
	<h2 class="mt-12 text-center text-2xl text-gray-200 sm:text-3xl">
		<div class="block">
			<span>Get in touch</span> <span class="blink-animation text-purple">_</span>
		</div>
	</h2>

	{#if !response}
		<!-- Form -->
		<ContactForm bind:response bind:clearForm />
	{:else if response.ok === false}
		<h3 class="mt-20 text-center text-3xl text-gray-200">Error :(</h3>

		<button on:click={clearForm} class="mt-16 block w-full text-center text-sm text-gray-700">
			try again
		</button>
	{:else}
		<div class="contact-success">
			<h3 class="mt-20 text-center text-3xl text-gray-200">Success</h3>

			<button on:click={clearForm} class="mt-16 block w-full text-center text-sm text-gray-700">
				retry
			</button>
		</div>
	{/if}
</main>
