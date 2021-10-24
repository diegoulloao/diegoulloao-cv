<script>
  // Components
  import { Nav } from "@components"

  // Global Styles
  import '@styles/app.scss'
</script>

<!-- Container -->
<div class="container min-h-screen mx-auto py-8 flex flex-col">
  <!-- Nav Menu -->
  <Nav />

  <!-- Page content -->
  <slot />
</div>
