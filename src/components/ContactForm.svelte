<script>
	// Components
	import { Button } from "@components";

	// Props
	export let response, clearForm;

	// States
	let name, subject, message;
	let sendingForm = false,
		submitClicked = false;

	// Actions
	const onSendForm = async () => {
		// Change submit clicked state to true
		if (!submitClicked) submitClicked = true;

		// Escape if form values are not filled
		if (!name || !subject || !message) {
			return false;
		}

		// Change sendingForm state to true
		sendingForm = true;

		// Send form to FormSpree
		response = await fetch("https://formspree.io/f/mpzlzjnv", {
			method: "post",
			body: JSON.stringify({ name, subject, message }),
			headers: { Accept: "application/json" }
		});

		// Change sendingForm status to false
		sendingForm = false;
	};

	// Pass clearForm function to parent
	clearForm = () => {
		name = subject = message = response = null;
		submitClicked = false;
	};
</script>

<!-- Form -->
<form id="contact-form" class="mx-auto mt-14 w-full max-w-xl sm:mt-20">
	<!-- Name -->
	<div class="items-center md:flex">
		<div class="flex w-full flex-col">
			<label for="name" class="text-sm leading-none text-gray-500 sm:text-[16px]">Name</label>
			<input
				bind:value={name}
				id="name"
				name="name"
				type="text"
				class:border-red-500={submitClicked && !name}
				class:border-gray-900={!submitClicked || name}
				class="caret-purple mt-2 border bg-black p-2 leading-none text-gray-50 focus:outline-none sm:mt-4 sm:p-3"
				data-1p-ignore
			/>
		</div>
	</div>

	<!-- Subject -->
	<div class="mt-6 items-center sm:mt-8 md:flex">
		<div class="flex w-full flex-col">
			<label for="subject" class="text-sm leading-none text-gray-500 sm:text-[16px]">Subject</label>
			<input
				bind:value={subject}
				id="subject"
				name="subject"
				type="text"
				class:border-red-500={submitClicked && !subject}
				class:border-gray-900={!submitClicked || subject}
				class="caret-purple mt-2 border bg-black p-2 leading-none text-gray-50 focus:outline-none sm:mt-4 sm:p-3"
			/>
		</div>
	</div>

	<!-- Message -->
	<div class="mt-6 flex w-full flex-col sm:mt-8">
		<label for="message" class="text-sm leading-none text-gray-500 sm:text-[16px]">Message</label>
		<textarea
			bind:value={message}
			id="message"
			name="message"
			type="text"
			class:border-red-500={submitClicked && !message}
			class:border-gray-900={!submitClicked || message}
			class="caret-purple mt-2 h-40 resize-none border bg-black p-2 text-base leading-none text-gray-50 focus:outline-none sm:mt-4 sm:p-3"
		/>
	</div>

	<!-- Send button -->
	<div class="mt-14 text-center sm:mt-16">
		{#if !sendingForm}
			<Button text="Send message" action={onSendForm} />
		{:else}
			<Button text="Sending..." type="freeze" action={() => false} />
		{/if}
	</div>
</form>
