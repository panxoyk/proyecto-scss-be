import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'button[primary]',
  template: '<ng-content></ng-content>',
  host: {
    class: 'button button__primary',
  },
  styleUrls: ['./button-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonPrimaryComponent {
  constructor() { }
}
