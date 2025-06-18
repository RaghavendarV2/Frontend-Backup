import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  counterValue = 0;

  increement(){
    this.counterValue = this.counterValue + 1;
  }

  decreement(){
    this.counterValue = this.counterValue - 1;
  }

  reset(){
    this.counterValue = this.counterValue = 0;
  }
}
