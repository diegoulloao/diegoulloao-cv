<script>
  // Components
  import { Header, Footer } from "@components"

  // Global Styles
  import '@styles/app.scss'
</script>

<!-- Container -->
<div class={[
  "container relative z-30 min-h-screen mx-auto py-8 flex flex-col",
  "px-3 sm:px-3 md:px-4 lg:px-6 xl:px-0"
].join(" ")}>
  <!-- Nav Menu -->
  <Header />

  <!-- Page Content -->
  <slot />

  <!-- Footer -->
  <Footer />
</div>
