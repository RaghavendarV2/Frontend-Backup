import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css'
})
export class Greeting {
  @Input() message!: string;
}
