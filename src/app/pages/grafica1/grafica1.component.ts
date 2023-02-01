import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
//import {baseColors} from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  public labels1: string[] = ['Pan','Refresco','Tacos'];
  public data1 =[10,15,40];
  
  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [ 350, 450, 100 ] },

  //   ]
  // };
  // public doughnutChartType: ChartType = 'doughnut';

  // public colors: baseColors[] = [

  //   { backgroundColor: ['#9E120E','#FF5800','#FFb414'] }
  // ];

  // // events
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }


}
