import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  isChild = true;
  toggle(){
    this.isChild = !this.isChild;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
