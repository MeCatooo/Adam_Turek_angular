import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  protected selectedBeer: Beer = new Beer('', '');
  protected list: Beer[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';
    this.httpClient.get(url).subscribe((data: any) => {
      data = data.map((beer: any) => {
        return new Beer(beer.name, beer.description);
      });
      this.list = data;
    });
  }

  onBeerSelect(beer: Beer) {
    this.selectedBeer = beer;
    console.log(this.list);
  }
}

