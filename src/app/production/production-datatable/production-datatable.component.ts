import { ProductionEditDialogComponent } from './../production-edit-dialog/production-edit-dialog.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Todo } from '@arek/dashboard/dashboard-todo/dashboard-todo.component';

@Component({
  selector: 'app-production-datatable',
  templateUrl: './production-datatable.component.html',
  styleUrls: ['./production-datatable.component.scss']
})
export class ProductionDatatableComponent implements OnInit, AfterViewInit {
  priority: any;
  data;
  title;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  ngAfterViewInit() {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ProductionEditDialogComponent, {
      width: '250px',
      data: {
        //   title: this.data.title,
        //   description: this.data.description,
        //   date: this.data.date,
        priority: this.priority
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('zamknalem');
      this.priority = result;
    });
  }
}
