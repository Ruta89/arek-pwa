import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      console.log('this.swUpdate.isEnabled');
      this.swUpdate.available.subscribe(() => {
        if (confirm('Nowa wersja jest dostępna. Załadować nową wersję?')) {
          window.location.reload();
        }
      });
    }
  }
  // goCzas() {
  //   this.navigate['/czasowka'];
  // }
}
