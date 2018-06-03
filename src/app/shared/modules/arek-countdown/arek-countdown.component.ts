import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
// import { interval } from 'rxjs/observable/interval';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-arek-countdown',
  template: `<span class="countdown">
  {{(counter | async) || getCountDown()}}
</span>`
})
export class ArekCountdownComponent implements OnInit {
  @Input() public endDate: string;

  @Input() overdue = 'Koniec !!!';

  @Input() days = 'dni';

  @Input() hours = 'h';

  @Input() minutes = 'm';

  @Input() seconds = 's';

  @Input() left = '';

  public counter: Observable<string>;

  constructor() {
    this.counter = interval(1000).pipe(switchMap(() => this.getCountDown()));
  }

  ngOnInit() {}

  public getCountDown(): string {
    if (!this.endDate) {
      return '';
    }

    const actualDate = new Date();
    const endDate = new Date(this.endDate);

    const secondsToGo = endDate.getTime() - actualDate.getTime();

    if (secondsToGo <= 0) {
      return this.overdue;
    }

    const days = Math.floor(secondsToGo / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (secondsToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((secondsToGo % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((secondsToGo % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days}${this.days} ${hours}${this.hours} ${minutes}${
        this.minutes
      } ${seconds}${this.seconds} ${this.left}`;
    } else if (hours > 0) {
      return `${hours}${this.hours} ${minutes}${this.minutes} ${seconds}${
        this.seconds
      } ${this.left}`;
    } else if (minutes > 0) {
      return `${minutes}${this.minutes} ${seconds}${this.seconds} ${this.left}`;
    } else {
      return `${seconds}${this.seconds} ${this.left}`;
    }
  }
}
