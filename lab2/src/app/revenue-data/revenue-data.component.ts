import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-revenue-data',
  templateUrl: './revenue-data.component.html',
  styleUrls: ['./revenue-data.component.scss']
})
export class RevenueDataComponent {
@Input() revenueData: string = '0'
@Input() title: string = 'Title'
@Input() imagePath: string = 'https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design-thumbnail.png'
}
