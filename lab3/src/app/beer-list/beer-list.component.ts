import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerApiService } from '../beer-api.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  protected selectedBeer: Beer = new Beer();
  protected list: Beer[] = [];
  constructor(private beerApi: BeerApiService) { }

  ngOnInit() {
    this.beerApi.getList().subscribe((data: any) => {
      this.list = data
    });
  }

  onBeerSelect(beer: Beer) {
    this.selectedBeer = beer;
  }
}

