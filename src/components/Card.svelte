<script>
  // Props
  export let description, owner, repo, thumbnail, url
</script>

<div class="flex items-center justify-center">
  <!-- Card -->
  <a
    class="w-auto bg-slate-900 border border-gray-800 p-5 shadow hover:bg-gray-900 duration-100"
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
