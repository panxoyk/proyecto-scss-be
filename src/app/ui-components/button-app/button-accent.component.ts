import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `button[accent]`,
  template: '<ng-content></ng-content>',
  host: {
    class: 'button button__accent',
  },
  styleUrls: ['./button-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonAccentComponent {
  constructor() { }
}
