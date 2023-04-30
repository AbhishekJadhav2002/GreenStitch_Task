import { useCarbonFootprint, useEmission } from '@/hooks/dashboard.hooks'
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    BarElement,
    LinearScale,
    Tooltip,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
)

function CarbonFootprintGraph() {
    const { data, isLoading, error } = useCarbonFootprint()

    if (isLoading) return <p className='pl-3 text-3xl text-neutral-500 font-bold'>Loading...</p>

    if (error) return <p className='pl-3 text-3xl text-red-500 font-bold'>Something went wrong!</p>

    const options = {
        plugins: {
            title: {
                display: false,
                text: 'Carbon Footprint',
            },
        },
        legend: {
            display: false,
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                }
            },
            y: {
                stacked: true,
                grid: {
                    display: false,
                }
            }
        },
        barPercentage: 0.8,
        categoryPercentage: 0.9,
    }

    const carbonFootprintData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                backgroundColor: 'rgba(254, 193, 2, 0.8)',
                hoverBackgroundColor: 'rgba(254, 193, 2, 1)',
                data: [],
            },
            {
                backgroundColor: 'rgba(226, 255, 50, 0.8)',
                hoverBackgroundColor: 'rgba(226, 255, 50, 1)',
                data: [],
            },
            {
                backgroundColor: 'rgba(85, 219, 219, 0.8)',
                hoverBackgroundColor: 'rgba(85, 219, 219, 1)',
                data: [],
            },
            {
                backgroundColor: 'rgba(87, 204, 120, 0.8)',
                hoverBackgroundColor: 'rgba(87, 204, 120, 1)',
                data: [],
                borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                },
            }
        ],
    }

    if (data) {
        carbonFootprintData.datasets[0].data = data.data.spinning
        carbonFootprintData.datasets[1].data = data.data.transportation
        carbonFootprintData.datasets[2].data = data.data.carding
        carbonFootprintData.datasets[3].data = data.data.heating_cooling
    }

    return <Bar data={carbonFootprintData} options={options} />
}

function EmissionGraph({ setEmissionPercentages }) {
    const { data, isLoading, error } = useEmission()

    if (isLoading) return <p className='p-3 my-6 text-3xl text-neutral-500 font-bold'>Loading...</p>

    if (error) return <p className='p-3 my-6 text-3xl text-red-500 font-bold'>Something went wrong!</p>

    const emissionData = {
        labels: ['Spinning', 'Transportation', 'Carding', 'Heating & Cooling'],
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        datasets: [
            {
                borderWidth: 0,
                data: [],
                backgroundColor: [
                    'rgba(87, 204, 120, 0.8)',
                    'rgba(85, 219, 219, 0.8)',
                    'rgba(226, 255, 50, 0.8)',
                    'rgba(254, 193, 2, 0.8)',
                ],
                hoverBackgroundColor: [
                    'rgba(87, 204, 120, 1)',
                    'rgba(85, 219, 219, 1)',
                    'rgba(226, 255, 50, 1)',
                    'rgba(254, 193, 2, 1)',
                ],
            },
        ],
    }

    if (data) {
        emissionData.datasets[0].data = [
            data.data.spinning,
            data.data.transportation,
            data.data.carding,
            data.data.heating_cooling,
        ]

        setEmissionPercentages(data.data)
    }

    return <Doughnut data={emissionData} />
}

export { CarbonFootprintGraph, EmissionGraph }