import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent {
@Input() title: string = 'Title';
@Input() saled: string = '0';
@Input() deltaSaled: string = '0';
@Input() graphPath: string = 'https://wcs.smartdraw.com/chart/img/basic-bar-graph.png?bn=15100111864';

}
