<script lang="ts">
  import type { PageData } from './$types';

let { data }: { data: PageData } = $props();
console.log(JSON.stringify(data.database))
</script>

<p>{JSON.stringify(data.database)}</p>