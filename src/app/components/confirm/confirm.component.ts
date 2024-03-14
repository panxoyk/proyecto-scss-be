import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  update: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  updateNumber(): void {
    this.update = true
  }

}