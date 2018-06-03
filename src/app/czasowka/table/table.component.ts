import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CzasService } from '../../shared/czas.service';
import { CzasDataSource } from '../../shared/datasource';
import { Czas } from '../../shared/model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  dataSource = new CzasDataSource(this.czasService);
  displayedColumns = ['wll', 'l1', 'szt', 'min', 'more'];
  selectedCzas: Czas;
  sumMinut = 0;
  czasy: Czas[];
  laduj = true;
  eDate;

  endDate: string | number | Date;
  newDate: string;

  constructor(public czasService: CzasService) {}
  ngOnInit(): void {
    // console.log('dataSource', this.dataSource);
    const date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    this.endDate = date.getTime();

    this.czasService.czasy$.subscribe(czasy => {
      this.sumMinut = 0;
      this.czasy = czasy;
      czasy.forEach(itm => {
        return (this.sumMinut = this.sumMinut + itm.min * itm.szt); /*  */
      });
    });

    setTimeout(() => {
      this.laduj = false;
    }, 300);
  }
  ngOnDestroy() {}

  odliczanie(created, min, szt) {
    const minn = min * 60000;
    const sztt = szt * minn;
    const cd = created + sztt;
    this.eDate = new Date(cd);
    return this.eDate;
  }

  setDate(newDate: string | Date): void {
    this.endDate = newDate;
  }

  setDateMinutes(minutes: number): void {
    const newDate = new Date();
    newDate.setMinutes(newDate.getMinutes() + minutes);

    this.setDate(newDate);
  }

  delete(id: string) {
    console.log('delete ', id);
    this.czasService.delete(id);
  }

  update(data: Czas) {
    console.log('update ', data);
  }
}
