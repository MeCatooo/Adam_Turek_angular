import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent{
@Input() selectedBeer: Beer = new Beer('', '');
}
