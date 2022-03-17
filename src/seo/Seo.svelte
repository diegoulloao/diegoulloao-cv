<script>
  // Seo
  import SvelteSeo from "svelte-seo"

  // Props
  export let
    title = "Diego Ulloa - Fullstack Developer",
    description = "Diego Ulloa, Full Stack Developer, Open source contributor and Autodidact Programmer."
</script>

<!-- Seo -->
<SvelteSeo
  {title}
  {description}
  keywords={[
    "diego",
    "ulloa",
    "fullstack",
    "frontend",
    "backend",
    "dev",
    "developer",
    "javascript",
    "typescript"
  ].join(", ")},
  openGraph={{
    title,
    description,
    type: "website",
    url: "https://diegoulloa.dev/"
  }},
  twitter={{
    title,
    description,
    site: "@diegoulloao"
  }}
/>
