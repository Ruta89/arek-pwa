import { Production } from './../../shared/model';
import { CzasService } from './../../shared/czas.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  NgForm
} from '@angular/forms';
import { MatToolbar, ErrorStateMatcher } from '@angular/material';
import { ProductionModule } from '../production.module';
import { ProductionService } from '@arek/shared/production.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addFormProd: FormGroup;
  wll: number;
  l1: number;
  szt: number;
  min: number;

  constructor(
    private fb: FormBuilder,
    private productionService: ProductionService,
    private router: Router
  ) {}

  onChange(event: any) {}

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    console.log(form);
    this.saveProductionForm(form);
    this.router.navigate(['/produkcja']);
  }

  onSubmit({ value, valid }: { value: Production; valid: boolean }) {
    console.log(value, valid);
  }

  ngOnInit() {
    this.addFormProd = this.fb.group({
      wll: ['', Validators.required],
      l1: ['', Validators.required],
      szt: '',
      nici: '',
      auf: '',
      aufFormat: '',
      czas: ''
    });
  }

  saveProductionForm(data) {
    this.productionService.savePozycjaAdd(data);
    this.productionService.addSztuk(data.ilosc);
    // nawiguj do vidoku listy
  }
}
