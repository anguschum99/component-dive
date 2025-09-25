import { Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; Don't use this
  @Input({ required: true }) label!: string;
  @Input() subtitle: string = '';

  // @HostListener('click') onClick() {
  //   console.log('clickeddd');
  // }

  onClick(){
    console.log('clicked');
  }


}
