import { Component } from '@angular/core';
import { CSS } from '../model/css.model';
import { CssCommunicationService } from '../css-communication.service';

@Component({
  selector: 'app-css-output',
  templateUrl: './css-output.component.html',
  styleUrls: ['./css-output.component.scss']
})
export class CssOutputComponent {
  protected css! : CSS
  constructor(private cssCommunicationService: CssCommunicationService) {
    this.css = cssCommunicationService.getCss();
   }


}
