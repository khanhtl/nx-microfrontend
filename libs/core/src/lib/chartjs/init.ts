import { Chart } from 'chart.js/auto';
export const initChartJs=(el: any, type: any) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
    }],

  };
  const config = {
    type: type ?? 'bar',
    data: data,
  };
  if (el) {
    new Chart(el, config as any);
  }
}
