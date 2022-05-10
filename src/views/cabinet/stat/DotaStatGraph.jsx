import { Radar } from 'react-chartjs-2';

const data = {
    labels: ['Гибкость', 'Файтинг', 'Пушинг', 'Поддержка', 'Фарминг'],
    datasets: [
      {
        data: [2, 9, 3, 5, 2],
        backgroundColor: '#fac70469', 
        borderWidth: 1,
        pointBackgroundColor: '#FAC704',
        pointBorderColor: '#FAC704',
        pointRadius: 4,
        borderColor: '#FAC704',
      },
    ],
  };
  
  const options = {
    scales: {
      r: {
        angleLines: {
          color: '#BFBFBF'
        },
        grid: {
          color: '#23252C'
        },
        ticks:{
          display: false,
          color: '#FFFFFF',
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

const DotaStatGraph = () => {
    return (<Radar data={data} options={options} />);
}

export default DotaStatGraph;