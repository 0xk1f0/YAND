<script lang="ts">
    export let name: string = '';
    export let summary: string = '';
    export let icon: string = '';
    export let url: string = '#';
    export let badge: string = '';
</script>

<a href={url}>
    <div
        class="bg-surface-500 rounded-xl flex flex-row flex-1 mt-4 align-middle justify-between ease-in-out transition-transform hover:-translate-y-1/20"
    >
        <div class="p-4">
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
        <div style="display: {badge == '' ? 'none' : 'unset'}" class="bg-surface-600 mt-auto p-1.5 rounded-md scale-[105%]">
            <p class="text-sm">{badge}</p>
        </div>
    </div>
</a>
