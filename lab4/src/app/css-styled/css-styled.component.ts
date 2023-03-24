import { Component, Input } from '@angular/core';
import { CSS } from '../model/css.model';
import { CssCommunicationService } from '../css-communication.service';

@Component({
  selector: 'app-css-styled',
  templateUrl: './css-styled.component.html',
  styleUrls: ['./css-styled.component.scss']
})
export class CssStyledComponent {
  protected css! : CSS
  constructor(private cssCommunicationService: CssCommunicationService) {
    this.css = cssCommunicationService.getCss();
   }
}
