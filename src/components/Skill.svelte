<script>
  // Props
  export let skill
</script>

<!-- Skill -->
<div>
  <h4 class="text-xl sm:text-[22px] mb-0 sm:mb-1 font-normal text-gray-600">{skill.title}</h4>

  <ul class="text-gray-200 text-sm sm:text-[16px] leading-6">
    {#each skill.items as i}
      <li>{i}</li>
    {/each}
  </ul>
</div>
