import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i:number = 0
  count:number = 0;
  title = "stepup"
  getVal(){
    return "Hi i am"
  }
  handleClick(){
    alert(`Click Me${++this.i}`)
    console.log(this.i);
    
  }
  Inc(){
    this.count++;
    //console.log(this.count);
    
  }
  Dec(){
    this.count>0 ? this.count-- : 0;
  }
}
