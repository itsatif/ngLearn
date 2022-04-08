import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './MyComponents/counter/counter.component';
import { CounterBtnComponent } from './MyComponents/counter-btn/counter-btn.component';
import { CounterOutputComponent } from './MyComponents/counter-output/counter-output.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { counterReducer } from './reducer/reducer';
import { InpComponent } from './MyComponents/inp/inp.component';
import { OperatorsComponent } from './MyComponents/operators/operators.component';
import { NgDestComponent } from './MyComponents/ng-dest/ng-dest.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterBtnComponent,
    CounterOutputComponent,
    InpComponent,
    OperatorsComponent,
    NgDestComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter:counterReducer}, {}),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
