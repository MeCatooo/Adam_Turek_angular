import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest, debounceTime, delay, distinctUntilChanged, filter, forkJoin, fromEvent, interval, map, merge, of, take, tap, timer, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'lab7';
  @ViewChild('input') myInput: any;

  cursor = new Observable<string>(observer => {
    fromEvent(document, 'click').subscribe((e: any) => {
      let x = e.clientX;
      let y = e.clientY;
      observer.next(`(${x}, ${y})`);
    });
  });

  cursorInterval = new Observable<any>(observer => {
    fromEvent(document, 'mousemove').subscribe((e: any) => {
      let x = e.clientX;
      let y = e.clientY;
      observer.next({ x, y });
    })
  });

  votingA = new Observable<boolean>(observer => {
    setTimeout(() => {
      observer.next(Math.random() < 0.5);
      observer.complete();

    }, 3000);
  });

  votingB = new Observable<boolean>(observer => {
    setTimeout(() => {
      observer.next(Math.random() < 0.5);
      observer.complete();

    }, 1000);
  });

  votingC = new Observable<boolean>(observer => {
    setTimeout(() => {
      observer.next(Math.random() < 0.5);
      observer.complete();
    }, 2000);
  });

  inputText = new Observable<string>(observer => {
    fromEvent(this.myInput.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((e: any) => {
      let text = e.target.value;
      observer.next(text);
    })
  });

  ngOnInit(): void {
    this.cursor.subscribe(
      (pos) => {
        console.log(pos);
      });

    this.cursorInterval.pipe(
      debounceTime(2000),
      filter((pos: any) => pos.x > 500),
    ).subscribe(
      (pos) => {
        console.log(pos);
      });

    const combined = forkJoin([this.votingA, this.votingB, this.votingC]);
    combined.subscribe(
      (voting) => {
        console.log(voting);
      });

  }
  ngAfterViewInit(): void {

    this.inputText.subscribe(
      (text) => {
        console.log(text);
      }
    );

  }

}
