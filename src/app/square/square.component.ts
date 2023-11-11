import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      square works!
      {{rando}}
    </p>
  `,
  styles: ``
})
export class SquareComponent {
rando = Math.random();
}
