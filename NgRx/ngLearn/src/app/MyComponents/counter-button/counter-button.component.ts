import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {increment,decrement,reset} from '../../actions/index';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store:Store<{ counter: { counter:number } }>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  onReset(){
    this.store.dispatch(reset());
  }
}
