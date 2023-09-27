import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: ['Income Expenses 2022', 'Expensses for 2022: '],
        },
        titlee: {
            display: true,
            text: 'Hey'
        }
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Expenses',
            data: [1000, 50000, 15000, 15000, 150000, 200000, 300000, 35000, 40000, 80000, 250000, 300000],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Incomes',
            data: [2000, 380000, 100000, 250000, 25000, 40000, 10000, 60000, 100000, 60000, 600000, 800000],
            borderColor: 'rgb(46, 204, 113)',
            backgroundColor: 'rgba(46, 204, 113, 0.5)',
        },
    ],
};

export function IncomeExpensesChart({ expensses, expenssesAvg, income, incomesAvg }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Incomes and Expenses 2022',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Expenses',
                data: expensses,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Incomes',
                data: income,
                borderColor: 'rgb(46, 204, 113)',
                backgroundColor: 'rgba(46, 204, 113, 0.5)',
            },
        ],
    };

    return (
        <>
            <section className='line-titles'>
                <h2>Incomes and Expenses 2022</h2>
                <h1 className='red'>{`Average expensses for 2022:  ${Math.ceil(expenssesAvg).toLocaleString()}$`}</h1>
                <h1 className='green'>{`Average incomes for 2022: ${Math.ceil(incomesAvg).toLocaleString()}$`}</h1>
            </section>
            <Line options={options} data={data} />
        </>
    )
}
