import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Miejsce} from "./Miejsce";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab9';
  kino:Miejsce[] = []
  rezerwacje: Observable<Miejsce[]>=new Observable<Miejsce[]>(observer => {
      for (let i = 0; i < 100; i++) {
        this.rezerwuje.subscribe((miejsce)=>{
          this.kino[i] = miejsce
          observer.next(this.kino)
        })
      }
  });
  rezerwuje: Observable<Miejsce> = new Observable<Miejsce>(observer => {
    setTimeout(()=>{
      const result = Math.floor(Math.random() * 3);
      observer.next(result)
      observer.complete()
    }, Math.floor(Math.random() * 20000))
  });


  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.kino.push(0)
    }
  }



  protected readonly Miejsce = Miejsce;
}
