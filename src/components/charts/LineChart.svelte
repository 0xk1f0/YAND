<script lang="ts">
    import ApexCharts from 'apexcharts';

    export let xData: number[] = [0];
    export let yData: number[] = [0];
    export let color: string[] = ['#000000'];
    export let showLabels: boolean = true;

    var options = {
        series: [
            {
                data: yData
            }
        ],
        chart: {
            type: 'area',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            colors: color
        },
        grid: {
            show: showLabels,
            borderColor: color[1],
            row: {
                colors: color,
                opacity: 0
            },
            column: {
                colors: color,
                opacity: 0
            }
        },
        xaxis: {
            type: 'numeric',
            categories: xData,
            tooltip: {
                enabled: false
            },
            crosshairs: {
                show: false
            },
            labels: {
                show: showLabels,
                style: {
                    colors: color
                }
            }
        },
        yaxis: {
            labels: {
                show: showLabels,
                style: {
                    colors: color
                }
            },
            tooltip: {
                enabled: false
            },
            crosshairs: {
                show: false
            }
        },
        fill: {
            colors: color
        }
    };

    function chart(node: any) {
        const chart = new ApexCharts(node, options);
        chart.render();

        return {
            destroy() {
                chart.destroy();
            }
        };
    }
</script>

<div id="apex-chart" use:chart />
