import { Injectable } from '@angular/core';
import { CSS } from './model/css.model';

@Injectable({
  providedIn: 'root'
})
export class CssCommunicationService {
  private static css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    'background-color': undefined
  }
  constructor() { }

  public getCss(): CSS {
    return CssCommunicationService.css;
  }

  public setCss(css: CSS): void {
    CssCommunicationService.css = css;
  }
}
