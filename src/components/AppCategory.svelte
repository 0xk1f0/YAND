<script lang="ts">
    export let heading: string = '';
</script>

<div class="min-w-[33%] mb-2 flex-1">
    <h1 class="ml-2 mt-2">{heading}</h1>
    <div class="mx-2 flex flex-col align-middle justify-start space-y-1">
        <slot />
    </div>
</div>
