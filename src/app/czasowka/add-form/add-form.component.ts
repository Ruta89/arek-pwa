import { Component, OnInit } from '@angular/core';
import { CzasService } from '../../shared/czas.service';
import { Czas } from '../../shared/model';
// import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  addFormCzas: FormGroup;
  czasowka: Czas = {
    wll: null,
    l1: null,
    szt: null,
    min: null,
    note: null,
    createdAt: null
  };

  constructor(
    private czasService: CzasService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.addFormCzas = fb.group({
      wll: [null, Validators.required],
      l1: [null, Validators.required],
      szt: [null],
      min: [null]
    });
  }

  ngOnInit() {}
  addCzas() {
    this.czasService.add(this.czasowka);
    this.router.navigate(['/czasowka']);
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
  }
}
