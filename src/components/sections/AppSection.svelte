<script lang="ts">
    export let auto: boolean = true;
</script>

<div class="flex flex-col flex-wrap {auto ? 'lg:flex-row' : ''}  p-4">
    <slot />
</div>
