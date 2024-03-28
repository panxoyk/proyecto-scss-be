import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  noNumero: boolean = false

  form: FormGroup = this.fb.group({
    region: ['', Validators.required],
    comuna: ['', Validators.required],
    poblacion: ['', Validators.required],
    calle: ['', Validators.required],
    numero: ['', Validators.required],
    dpto: ['', Validators.required],
    block: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeNoNumero(): void {
    this.noNumero = !this.noNumero
  }

}
