import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css-line',
  templateUrl: './css-line.component.html',
  styleUrls: ['./css-line.component.scss']
})
export class CssLineComponent {
  @Input() propertyName:string|undefined;
  @Input() propertyValue:string|undefined;
}
