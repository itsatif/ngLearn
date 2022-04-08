import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.css']
})
export class InpComponent implements OnInit {
  count:number=0;
  value:any=0;
  catchInp(e){
    console.log(e.target.value);
    this.value = e.target.value; 
  }

  HandleCount(){
    this.count++;  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
