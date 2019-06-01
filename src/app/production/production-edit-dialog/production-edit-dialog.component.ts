// import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { Todo } from '@arek/dashboard/dashboard-todo/dashboard-todo.component';

// @Component({
//   selector: 'app-production-edit-dialog',
//   templateUrl: './production-edit-dialog.component.html',
//   styleUrls: ['./production-edit-dialog.component.scss']
// })
// export class ProductionEditDialogComponent implements OnInit {
//   constructor(
//     public dialogRef: MatDialogRef<ProductionEditDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: Todo
//   ) {}

//   ngOnInit() {}

//   onClick(): void {
//     this.dialogRef.close();
//   }
//   onNoClick(): void {
//     console.log('onNoClick');
//   }
// }
import { Component, Inject } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-production-edit-dialog',
  templateUrl: './production-edit-dialog.component.html',
  styleUrls: ['./production-edit-dialog.component.scss']
})
export class ProductionEditDialogComponent {
  newEmail: string;

  constructor() {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // updateEmail(): void {
  //   this.afs
  //     .collection('hackers')
  //     .doc(this.data.uid)
  //     .update({ email: this.newEmail });
  //   this.dialogRef.close();
  // }
}
