<script>
  // Seo
  import SvelteSeo from "svelte-seo"

  // Props
  export let title = "", description = ""
</script>

<!-- Seo -->
<SvelteSeo {title} {description} />
