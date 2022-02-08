import { Component } from '@angular/core';
import { multicast } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lco';
  date = new Date();

  constructor() {
    console.log("Hi");
    console.log(this.fun(this.date));    
  }

  fun(x: Date) {
    return this.date;
  }
  a = 100;
  siteUrl=window.location.href;
}
