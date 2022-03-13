<script>
  export let skill
</script>

<div>
  <h4 class="text-xl mb-2">{skill.title}</h4>
  <ul class="text-gray-200">
    {#each skill.items as i}
      <li>{i}</li>
    {/each}
  </ul>
</div>
