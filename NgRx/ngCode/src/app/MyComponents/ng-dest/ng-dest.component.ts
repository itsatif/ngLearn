import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-dest',
  templateUrl: './ng-dest.component.html',
  styleUrls: ['./ng-dest.component.css']
})
export class NgDestComponent implements OnInit,OnDestroy {
  counter:number = 0;
  interval:any;
  constructor() { }

  ngOnInit(): void {
    console.log("onit is called");
    this.interval = setInterval(()=>{
      this.counter++;
      console.log(this.counter);
      
    },1000)
  }

  ngOnDestroy():void{
    clearInterval(this.interval);
    console.log("on destroy is called");
    
  }

}
