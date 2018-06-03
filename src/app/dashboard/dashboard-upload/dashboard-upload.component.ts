import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from 'angularfire2/storage';

@Component({
  selector: 'app-dashboard-upload',
  templateUrl: './dashboard-upload.component.html',
  styleUrls: ['./dashboard-upload.component.scss']
})
export class DashboardUploadComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private afStorage: AngularFireStorage) {}

  ngOnInit() {}

  upload(event) {
    const id = Math.random()
      .toString(36)
      .substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
  }
}
