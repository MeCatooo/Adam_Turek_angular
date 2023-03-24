import { Injectable } from '@angular/core';
import { CSS } from './model/css.model';

@Injectable({
  providedIn: 'root'
})
export class CssCommunicationService {
  private css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    'background-color': undefined
  }
  constructor() { }

  public getCss(): CSS {
    return this.css;
  }

  public setCss(css: CSS): void {
    this.css = css;
  }
}
