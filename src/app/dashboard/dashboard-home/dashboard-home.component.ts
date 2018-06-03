import { DashboardGalleryComponent } from '@arek/dashboard/dashboard-gallery/dashboard-gallery.component';
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit, AfterContentInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 6,
    lg: 5,
    md: 4,
    sm: 3,
    xs: 2
  };

  breakpoint;

  tiles = [
    {
      text: 'Dodaj Pozycje',
      rows: 3,
      color: 'gold',
      url: '/produkcja/add'
    },
    {
      text: 'TODO',
      rows: 2,
      color: 'orange',
      url: '/dashboard/todo'
    },
    {
      text: 'Zobacz Pozycje',
      rows: 1,
      color: 'lightblue',
      url: '/produkcja'
    },
    {
      text: 'Wgraj',
      rows: 2,
      color: 'green',
      url: '/dashboard/upload'
    },
    {
      text: 'Galeria',
      rows: 2,
      color: 'lightgreen',
      url: '/dashboard/gallery'
    },
    {
      text: 'Waga',
      rows: 1,
      color: 'lightpink',
      url: '/dashboard/waga'
    },
    {
      text: 'czasowka',
      rows: 1,
      color: 'lightgreen',
      url: '/czasowka'
    },
    {
      text: 'Rozne',
      rows: 1,
      color: '#DDBDF1',
      url: '/dashboard/rozne'
    }
  ];
  constructor(private observableMedia: ObservableMedia) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
}
