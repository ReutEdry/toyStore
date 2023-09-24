

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ToyChart() {
    let toys = useSelector(storeState => storeState.toyModule.toys)
    let toyCount = toys.map(toy => {
        console.log(toy)
    })
    return <Doughnut data={data} />;
}


const data = {
    labels: ['Doll', 'Battery Powered', 'Talking', 'Beauty', 'Girls', 'Animal', 'Trip', 'Sport', 'Ride'],

    datasets: [
        {
            label: '# of Votes',
            data:
                [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 60, 64, 0.2)',
                'rgba(255, 99, 64, 0.2)',
                'rgba(255, 80, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 60, 64,1)',
                'rgba(255, 99, 64, 1)',
                'rgba(255, 80, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


