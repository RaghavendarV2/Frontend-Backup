import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  message: string = "Greeting, Hello world!";

  keyupHandler(event:KeyboardEvent){
    console.log(`user pressed ${event.key}`);
  }
}
