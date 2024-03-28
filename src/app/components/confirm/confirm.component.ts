import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  update: boolean = false

  numberForm: FormGroup = this.fb.group({
    number: ['', Validators.required],
    confirmNumber: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateNumber(): void {
    this.update = true
  }

  submitForm(): void {
    console.log('SUBMIT', this.numberForm.value)
  }

}
