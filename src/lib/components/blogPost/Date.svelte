<script lang="ts">
  export let date: string;

  $: formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
</script>

{formattedDate}
