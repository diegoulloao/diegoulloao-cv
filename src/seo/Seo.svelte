<script>
  // Seo
  import SvelteSeo from "svelte-seo"

  // Props
  export let
    title = "Diego Ulloa - Fullstack Developer",
    description = "Fullstack Developer, Open Source contributor and Autodidact Programmer."
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
  ].join(", ")}
  openGraph={{
    title,
    description,
    type: "website",
    url: "https://diegoulloa.dev/",
    images: [
      {
        url: "https://diegoulloa.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      }
    ]
  }}
  twitter={{
    title,
    description,
    site: "@diegoulloao",
    image: "https://diegoulloa.dev/og-image.png",
    imageAlt: "og-image"
  }}
/>
