import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { tap,map,take } from 'rxjs/operators';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,3).subscribe(console.log);
    // of(3,2,1).subscribe(v=>console.log(v));
    // from([10,20,30]).subscribe(v=>console.log(v),err=>console.log(err),()=>console.log('complete'));
    from([30,40,50]).pipe(tap(e=>console.log(`emiited item ${e}`)),map(e=>e*2),take(2)).subscribe(v=>console.log(v));
  }

}
