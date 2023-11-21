<script lang="ts">
    import ApexCharts from 'apexcharts';
    import { onMount } from 'svelte';

    export let name: string;
    export let value: number = 0;
    export let color: string[] = ['#000000'];

    var options = {
        series: [value],
        chart: {
            type: 'radialBar',
            offsetY: 20
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '24px'
                    }
                }
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            colors: color,
            gradient: {
                opacityFrom: 1,
                opacityTo: 0.7,
                stops: [0, 100]
            }
        }
    };

    onMount(() => {
        const chart = new ApexCharts(document.getElementById(name), options);
        chart.render();

        return {
            destroy() {
                chart.destroy();
            }
        };
    });
</script>

<div id={name} />
