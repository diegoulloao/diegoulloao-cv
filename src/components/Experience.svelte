<script>
  // Props
  export let company, logo, period, position, location, description, classes=""
</script>

<!-- Experience -->
<div class="experience-item flex flex-col sm:flex-row justify-end {classes}">
  <div class={[
    "experience-description flex justify-end items-center w-full",
    "sm:w-1/2 md:w-7/12 lg:w-3/5 xl:w-4/6 border-r border-gray-800 xl:-mr-12 sm:pr-8 lg:pr-12"
  ].join(" ")}>
    <p class="text-sm xl:max-w-3xl text-gray-500 border-b border-gray-700 pb-8 sm:border-0">{description}</p>
  </div>

  <div class={[
    "experience-head flex justify-end items-center order-first mb-4 sm:mt-0 sm:order-none",
    "w-full sm:w-1/2 md:w-5/12 lg:w-2/5 xl:w-2/6 pl-4 lg:pl-24 "
  ].join(" ")}>
    <div class="experience-main mr-6 sm:mr-4 lg:mr-8">
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

    <div class="experience-img w-16 lg:w-20">
      <img src={logo} alt="">
    </div>
  </div>
</div>

<style lang="scss">
  .experience-item:last-of-type .experience-description p {
    border-bottom-width: 0 !important;
  }
</style>
