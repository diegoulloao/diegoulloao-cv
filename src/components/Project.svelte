<script>
  // Components
  import { Label } from "@components"

  // Props
  export let
    description,
    repo,
    url = "#!",
    labels = [],
    classes = "",
    contributor = false,
    thumbnail = "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png"
</script>

<!-- Project -->
<div class="project-card">
  <!-- Card -->
  <a
    class="block grid content-between relative w-auto border border-gray-800 p-5 hover:bg-gray-900 duration-100 {classes}"
    href={url}
    target="_blank"
  >
    <!-- Header -->
    <div class="project top">
      <div class="flex flex-row">
        <img src={thumbnail} class="w-8" alt="" />

        <div class="ml-3 flex flex-col justify-center">
          <div class="flex">
            <span class="text-gray-300 font-semibold">{repo}</span>
            {#if contributor} <span class="ml-4 relative top-1 text-gray-700 text-xs font-semibold">[contributor]</span> {/if}
          </div>
        </div>
      </div>

      <!-- Content -->
      <p class="text-sm text-gray-500 mt-3 w-auto max-w-sm">
        {description}
      </p>
    </div>

    <!-- Labels -->
    {#if labels.length}
      <div class="project-bottom relative bottom-0 mt-3">
        {#each labels as l}
          <Label text={l} classes="mr-3" />
        {/each}
      </div>
    {/if}
  </a>
</div>
