import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { Gallery } from 'ng-gallery';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-dashboard-gallery',
  templateUrl: './dashboard-gallery.component.html',
  styleUrls: ['./dashboard-gallery.component.scss']
})
export class DashboardGalleryComponent implements OnInit {
  items: GalleryItem[];
  images = [
    {
      src: 'assets/images/gallery/licznik.jpg',
      thumbnail: 'assets/images/gallery/licznik_m.jpg',
      text: 'Licznik'
    },
    {
      src: 'assets/images/gallery/1.jpg',
      thumbnail: 'assets/images/gallery/1_m.jpg',
      text: 'Licznik'
    },
    {
      src: 'assets/images/gallery/2.jpg',
      thumbnail: 'assets/images/gallery/2_m.jpg',
      text: 'Licznik'
    },
    {
      src: 'assets/images/gallery/3.jpg',
      thumbnail: 'assets/images/gallery/3_m.jpg',
      text: 'Licznik'
    },
    {
      src: 'assets/images/gallery/4.jpg',
      thumbnail: 'assets/images/gallery/4_m.jpg',
      text: 'Licznik'
    },
    {
      src: 'assets/images/gallery/5.jpg',
      thumbnail: 'assets/images/gallery/5_m.jpg',
      text: 'Licznik'
    },
    {
      src: 'assets/images/gallery/6.jpg',
      thumbnail: 'assets/images/gallery/6_m.jpg',
      text: 'Licznik'
    },
    {
      src: 'assets/images/gallery/7.jpg',
      thumbnail: 'assets/images/gallery/7_m.jpg',
      text: 'Licznik'
    }
  ];

  constructor() {}

  ngOnInit() {
    // this.gallery.load(this.images);
    this.items = this.images.map(
      item => new ImageItem({src: 'item.src', thumb: 'item.thumbnail'})
    );
  }
}
