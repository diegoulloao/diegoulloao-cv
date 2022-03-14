<script>
  export let text, href="#!", target="", classes=""
</script>

<!-- Button -->
<a {href} {target} class={[
  "button bg-purple text-black px-4 py-3 transition duration-100 ease-in-out",
  "hover:bg-transparent hover:text-gray-200",
  classes
].join(" ")}>
  {text}
</a>
