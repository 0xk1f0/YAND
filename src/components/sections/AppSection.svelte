<script lang="ts">
    export let auto: boolean = true;
</script>

<div class="flex flex-col flex-wrap {auto ? 'lg:flex-row' : ''} px-4 mt-4">
    <slot />
</div>
