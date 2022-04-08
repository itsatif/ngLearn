import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inc:number=0;
  state:boolean=false;
  switch(){
    this.state = !this.state;
  }
  onClick(){
    this.inc++;
    console.log(this.inc);
    
  }
  dec(){
    if(this.inc>0){
      this.inc--;
    }
    console.log(this.inc);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
