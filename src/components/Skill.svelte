<script>
  // Props
  export let skill
</script>

<!-- Skill -->
<div>
  <h4 class="text-2xl mb-1 font-normal text-gray-600">{skill.title}</h4>

  <ul class="text-gray-200">
    {#each skill.items as i}
      <li>{i}</li>
    {/each}
  </ul>
</div>
