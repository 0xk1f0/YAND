<script lang="ts">
    export let name: string = '';
    export let summary: string = '';
    export let icon: string = '';
    export let url: string = '#';
</script>

<a href={url}>
    <div
        class="bg-surface-500 rounded-xl mt-4 p-4 align-middle ease-in-out transition-transform hover:-translate-y-1/20"
    >
        <div class="flex flex-row space-x-4 justify-start">
            <div class="my-auto">
                <img class="h-14" src="/icons/{icon}" alt="Card Icon" />
            </div>
            <div class="flex flex-col my-auto">
                <p class="font-semibold text">{name}</p>
                <p class="text-sm italic">{summary}</p>
            </div>
        </div>
    </div>
</a>
