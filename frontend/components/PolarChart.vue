<template>
  <div>
    <PolarArea id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default {
  name: 'PolarAreaChart',
  components: { PolarArea },
  data() {
    return {
      chartData: {
        labels: [
          'Product',
          'Marketing',
          'Sales',
          'Development',
          'Operations',
          'Hr Department',
          'Customer Service',
          'Admin'
        ],
        datasets: [
          // {
          //     label: 'My First dataset',
          //     backgroundColor: '#30CD9A',
          //     pointBackgroundColor: 'rgba(179,181,198,1)',
          //     pointBorderColor: '#fff',
          //     pointHoverBackgroundColor: '#fff',
          //     pointHoverBorderColor: 'rgba(179,181,198,1)',
          //     data: [65, 59, 90, 81, 56, 55, 40]
          // },
          // {
          //     label: 'My Second dataset',
          //     backgroundColor: 'rgba(255,99,132,0.2)',
          //     pointBackgroundColor: 'rgba(255,99,132,1)',
          //     pointBorderColor: '#fff',
          //     pointHoverBackgroundColor: '#fff',
          //     pointHoverBorderColor: 'rgba(255,99,132,1)',
          //     data: [28, 48, 40, 19, 96, 27, 100]
          // },
          // {
          //     label: 'My Third dataset',
          //     backgroundColor: 'rgba(255,99,132,0.2)',
          //     pointBackgroundColor: 'rgba(255,99,132,1)',
          //     pointBorderColor: '#fff',
          //     pointHoverBackgroundColor: '#fff',
          //     pointHoverBorderColor: 'rgba(255,99,132,1)',
          //     data: [50, 76, 24, 19, 96, 27, 100]
          // },

          {
            data: [50, 76, 24, 19, 96, 27, 100]
          },
          {
            data: [35, 68, 42, 10, 88, 31, 79]
          },
          {
            data: [50, 76, 24, 19, 96, 27, 100]
          },
          {
            data: [50, 76, 24, 19, 96, 27, 100]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
