<script>
  // Props
  export let company, logo, period, position, location, description, classes=""
</script>

<!-- Experience -->
<div class="experience-item flex justify-end {classes}">
  <div class="experience-description flex justify-end items-center w-4/6 border-r border-gray-800 pr-12">
    <p class="text-sm max-w-3xl text-gray-500">{description}</p>
  </div>

  <div class="experience-head flex justify-end items-center w-2/6">
    <div class="experience-main mr-8">
      <div class="experience-title text-lg text-gray-200">
        {company} <span class="text-sm">[{period}]</span>
      </div>

      <div class="experience-position text-gray-500 uppercase">
        {position}
      </div>

      <div class="experience-location text-sm text-gray-700">
        {location}
      </div>

    </div>

    <div class="experience-img">
      <img src={logo} class="w-20" alt="">
    </div>
  </div>
</div>
