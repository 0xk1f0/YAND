<script lang="ts">
    export let heading: string = '';
</script>

<div class="min-w-[50%] mb-2 flex-1">
    <h1 class="ml-2 mt-2 text-primary-700">{heading}</h1>
    <div class="mx-2 flex flex-col align-middle justify-start space-y-1">
        <slot />
    </div>
</div>
