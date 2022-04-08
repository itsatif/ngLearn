import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsOp';
  name:any;
  display:boolean = false;
  change(){
    this.display = !this.display;
  }
}
