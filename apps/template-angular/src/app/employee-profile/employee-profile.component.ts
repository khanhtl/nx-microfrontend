import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent {
  constructor() {

  }
  isLoading=true;
  ngOnInit() {

    setTimeout(() => {
      this.isLoading=false;
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
        type: 'bar',
        data: data,
      };
      console.log(document?.getElementById('bar'));

      new Chart(document?.getElementById('bar') as any, config as any);
      new Chart(document?.getElementById('line') as any, { ...config, type: 'line' });
      new Chart(document?.getElementById('doughnut') as any, { ...config, type: 'doughnut' });
    });
  }
}
