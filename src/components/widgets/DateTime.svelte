<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    // Date
    const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTH = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    let interval: NodeJS.Timeout;
    let time: Date = new Date();
    $: HOUR = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
    $: MINUTE = time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
    $: DAY = time.getDate();
    $: DAY_NAME = WEEKDAY[time.getDay()];
    $: MONTH_NAME = MONTH[time.getMonth()];
    $: YEAR = time.getFullYear();

    onMount(() => {
        interval = setInterval(() => {
            time = new Date();
        }, 5000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="flex flex-row justify-center">
    <div class="flex flex-row py-2 px-4 space-x-4">
        <div class="flex flex-col my-auto">
            <p class="text-primary-700 font-semibold text-xl">
                {DAY_NAME}, {DAY}
                {MONTH_NAME}
                {YEAR}
            </p>
        </div>
        <div class="flex my-auto">
            <svg class="h-16 w-1">
                <line class="stroke-primary-700 stroke-[4]" x1="0" y1="0" x2="0" y2="200" />
            </svg>
        </div>
        <div class="flex flex-col">
            <p class="text-primary-700 font-bold text-3xl">
                {HOUR}
            </p>
            <p class="text-primary-700 font-bold text-3xl">
                {MINUTE}
            </p>
        </div>
        
    </div>
</div>
