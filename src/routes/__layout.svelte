<script>
  // Components
  import { Nav } from "@components"

  // Global Styles
  import '@styles/app.scss'
</script>

<!-- Container -->
<div class="container relative z-30 min-h-screen mx-auto py-8 flex flex-col">
  <!-- Nav Menu -->
  <Nav />

  <!-- Page Content -->
  <slot />
</div>
