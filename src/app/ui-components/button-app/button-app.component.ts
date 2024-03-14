import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button-app.component.html',
  styleUrls: ['./button-app.component.scss']
})
export class ButtonAppComponent implements OnInit {

  @Input() disabled: boolean = false

  @Input() text: string = 'button-app works!'

  @Input() variantButton: string = 'primary'

  constructor() { }

  ngOnInit(): void {
  }

  primary() {
    return this.variantButton === 'primary'
  }

  accent() {
    return this.variantButton === 'accent'
  }

}
