import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Точность %', 'Попадания в голову %', 'Живучесть %'],
  datasets: [
    {
      barThickness: 25,
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#fac70494',
      borderRadius: 5,
      borderColor: '#FAC704',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        backdropColor: "rgba(222, 252, 22, 1)",
        backdropPadding: 5,
        padding: 20,
        stepSize: 25,
        fontSize: 19,
        color: '#FFF',
      },
      grid:{
        color: 'rgba(248, 248, 248, 0.2)',
      }
    },
    x: {
      ticks: {
        fontSize: 19,
        color: '#FFFFFF',
      },
      grid:{
        color: 'rgba(248, 248, 248, 0.03)',
      },
      suggestedMin: 0,
      suggestedMax: 100
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 16,
        },
      },
    },
  },
};

const CsgoStatGraph = () => {
  return <Bar data={data} options={options} />;
};

export default CsgoStatGraph;
