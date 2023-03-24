import { Component } from '@angular/core';
import { CSS } from '../model/css.model';
import { CssCommunicationService } from '../css-communication.service';


@Component({
  selector: 'app-css-input',
  templateUrl: './css-input.component.html',
  styleUrls: ['./css-input.component.scss']
})
export class CssInputComponent {
  protected css : CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    'background-color': undefined
  }
  constructor(private cssCommunicationService: CssCommunicationService) {
    cssCommunicationService.setCss(this.css);
   }

}
