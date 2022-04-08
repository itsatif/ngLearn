import { Component, OnInit } from '@angular/core';
import { of,Observable } from 'rxjs';
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  list:string[] = ["watch","bag","bat","ball"];
  items:Observable<string[]> = of(this.list);
  constructor() { }

  ngOnInit(): void {
    //this.items.subscribe(item=>console.log(item));
    of(this.list).subscribe(data=>console.log(data));
  }

}
