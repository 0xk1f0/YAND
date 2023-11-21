<script lang="ts">
    const TIME = new Date();

    // Time
    const HOUR = TIME.getHours();
    const MINUTE = TIME.getMinutes();

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
    const DAY = TIME.getDate();
    const DAY_NAME = WEEKDAY[TIME.getDay()];
    const MONTH_NAME = MONTH[TIME.getMonth()];
    const YEAR = TIME.getFullYear();
</script>

<div class="min-w-[50%] bg-surface-500 p-4 flex flex-row rounded-md flex-1 justify-between space-x-4">
    <div class="flex flex-col">
        <p class="text-primary-500 font-bold text-3xl">
            {HOUR > 10 ? HOUR : `0${HOUR}`}
        </p>
        <p class="text-primary-500 font-bold text-3xl">
            {MINUTE > 10 ? MINUTE : `0${MINUTE}`}
        </p>
    </div>
    <div class="flex flex-col my-auto">
        <p class="text-primary-500 font-semibold text-xl">
            {DAY_NAME}, {DAY}
            {MONTH_NAME}
            {YEAR}
        </p>
    </div>
</div>
