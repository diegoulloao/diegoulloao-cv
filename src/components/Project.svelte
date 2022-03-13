<script>
  // Props
  export let description, owner, repo, thumbnail, url, classes=""
</script>

<div class="project-card">
  <!-- Card -->
  <a
      class="block w-auto border border-gray-800 p-5 hover:bg-gray-900 duration-100 {classes}"
    href="{url}"
    target="_blank"
  >
    <!-- Header -->
    <div class="flex flex-row">
      <img src="{thumbnail}" class="w-8" alt="" />

      <div class="ml-3 flex flex-col justify-center">
        <div class="flex">
          <span class="text-gray-500 font-semibold">{ owner }/</span>
          <span class="text-gray-300 font-semibold">{ repo }</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <p class="text-xs text-gray-500 mt-3 w-auto max-w-sm">
      { description }
    </p>
  </a>
</div>
