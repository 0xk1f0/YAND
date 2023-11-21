<script lang="ts">
    export let auto: boolean = true;
</script>

<div class="bg-surface-300 flex flex-col flex-wrap {auto ? 'lg:flex-row' : ''} py-2 mx-4 justify-between mt-4 rounded-md">
    <slot />
</div>
