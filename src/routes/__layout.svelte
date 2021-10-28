<script>
  // Components
  import { Nav, Video } from "@components"

  // Store
  import { showVideoBackground } from "@stores/app.js"

  // Global Styles
  import '@styles/app.scss'
</script>

<!-- Video background -->
{#if $showVideoBackground}
  <Video />
{/if}

<!-- Container -->
<div class="container relative z-30 min-h-screen mx-auto py-8 flex flex-col">
  <!-- Nav Menu -->
  <Nav />

  <!-- Page Content -->
  <slot />
</div>
