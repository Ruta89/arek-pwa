import { DashboardGalleryComponent } from '@arek/dashboard/dashboard-gallery/dashboard-gallery.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  tiles = [
    {
      text: 'Dodaj Pozycje',
      cols: 1,
      rows: 1,
      color: 'lightgreen',
      url: '/produkcja/add'
    },
    {
      text: 'TODO',
      cols: 1,
      rows: 1,
      color: 'orange',
      url: '/dashboard/todo'
    },
    {
      text: 'Zobacz Pozycje',
      cols: 3,
      rows: 1,
      color: 'lightblue',
      url: '/produkcja'
    },
    {
      text: 'Wgraj',
      cols: 2,
      rows: 2,
      color: 'green',
      url: '/dashboard/upload'
    },
    {
      text: 'Galeria',
      cols: 1,
      rows: 2,
      color: 'lightgreen',
      url: '/dashboard/gallery'
    },
    {
      text: 'Waga',
      cols: 1,
      rows: 1,
      color: 'lightpink',
      url: '/dashboard/waga'
    },
    {
      text: 'czasowka',
      cols: 2,
      rows: 1,
      color: 'lightgreen',
      url: '/czasowka'
    },
    {
      text: 'Rozne',
      cols: 2,
      rows: 1,
      color: '#DDBDF1',
      url: '/dashboard/rozne'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
