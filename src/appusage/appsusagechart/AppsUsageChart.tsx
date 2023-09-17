import React from 'react'
import {Bar} from 'react-chartjs-2'
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  BarController
} from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement, BarController)

interface AppsUsageChartProps {
  names: string[]
  volumes: number[]
}
const AppsUsageChart = ({names, volumes}: AppsUsageChartProps) => {
  const data = {
    labels: names,
    datasets: [
      {
        label: 'Monthly Sales',
        data: volumes,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div>
      <h3 id='app-usage-chart'>&raquo;&raquo; Apps Usage Chart</h3>
      <Bar data={data} options={options} />
    </div>
  )
}

export default AppsUsageChart
