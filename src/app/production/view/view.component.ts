import { Component, OnInit } from '@angular/core';
import { ProductionService } from '@arek/shared/production.service';

import { MyDataSource } from '../../shared/datasource';
import { Production } from '@arek/shared/model';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  loading;
  sumSzt = 0;
  sumWaga = 0;
  sumIlosc = 0;
  summMinut = 0;
  sumMinut = 0;
  times;
  dataSource;
  selectedCzas: Production;
  laduj = true;
  dateNow;
  endDate: string | number | Date;
  newDate: string;
  id: string;
  show;
  myData;
  dataArray;
  waga: number;
  productionsData;
  // dataGetPozycje: Production[];
  MyDataSource;

  displayedColumns = [
    'wll',
    'l1',
    'auf',
    'm',
    'nici',
    'szt',
    'czas',
    'dateNow',
    'more'
  ];
  constructor(
    public productionService: ProductionService,
    private router: Router,
    public afs: AngularFirestore
  ) {}

  ngOnInit(): void {
    const dateMow = new Date();
    this.productionService.productions$.subscribe(p$ => {
      this.sumMinut = 0;
      this.MyDataSource = p$;
      console.log('p$: ', p$);
    });
    const date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    this.endDate = date.getTime();

    this.productionService.productionsCollectionRef
      .valueChanges()
      .subscribe(productions => {
        this.sumMinut = 0;

        this.dataArray = productions;
        productions.forEach(itm => {
          this.sumMinut = this.sumMinut + itm.czas * itm.szt;
        });
      });

    setTimeout(() => {
      this.laduj = false;
    }, 300);
  }

  calculateSumszt(value: number) {
    this.sumSzt = this.sumSzt + value;
  }
  calculateSumWaga(value: number) {
    this.sumWaga = this.sumWaga + value;
  }
  calculateSumMinut(value) {
    this.summMinut = this.summMinut + value;
  }

  getPozycje(hours) {
    return this.productionService
      .promisePozycje(hours)
      .then(dane => {
        this.myData = dane;
      })
      .catch(err => {
        alert(err);
      });
  }

  summary() {
    this.productionService.productions$.subscribe(data => {
      this.sumSzt = 0;
      this.sumWaga = 0;
      this.summMinut = 0;
      console.log('data: ', data);
      this.productionsData = data;
      data.forEach(itm => {
        console.log('itm: ', itm);
        this.calculateSumszt(itm.szt);
        if (itm.waga) {
          this.calculateSumWaga(itm.waga * itm.szt);
        }

        this.calculateSumMinut(itm.czas * itm.szt);
        this.getTime(itm.wll, itm.l1);
      });
    });
    return this.productionsData;
  }

  getTime(t, d) {
    return this.productionService.getTimes(t, d).then(data => {
      this.times = data;
    });
  }

  goToDetail(id) {
    this.router.navigate(['/details', id]);
  }
  showDetails(data) {
    this.show = data;
    console.log('data: showdetails: ', data);
  }
  delete(id) {
    this.show = false;
    return this.productionService.delete(id);
  }
  update(data) {
    console.log(data);
  }
}
