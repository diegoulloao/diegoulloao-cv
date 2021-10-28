<script>
  // Transitions
  import { fade } from "svelte/transition"
</script>

<!-- Video Background -->
<div class="fixed w-screen h-screen overflow-hidden top-0">
  <!-- Overlay -->
  <div class="bg-black absolute w-screen h-screen z-20 bg-opacity-70" />

  <!-- Video -->
  <video
    src="/video.mp4"
    class="absolute -top-full left-0 w-screen h-auto z-10"
    transition:fade
    muted autoplay playsinline loop
  />
</div>
