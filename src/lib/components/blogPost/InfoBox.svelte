<script lang="ts">
  export let variant: 'positive' | 'negative';

</script>

<div
  class="rounded-lg border hover:scale-[1.007] transition-all"
  class:border-red-950={variant==='negative'}
  class:border-green-950={variant==='positive'}
  class:bg-green-800={variant==='positive'}
  class:bg-red-800={variant==='negative'}>
  <div
    class="py-1 px-4 mb-4 rounded-t-lg text-white tracking-wider"
    class:bg-green-950={variant==="positive"}
    class:bg-red-950={variant==="negative"}
    >
    <slot name="title" />
  </div>
  <div class="text-white px-4 my-4">
    <slot default />
  </div>
</div>
