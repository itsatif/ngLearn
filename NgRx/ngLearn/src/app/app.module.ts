import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/reducer';
import { CounterComponent } from './MyComponents/counter/counter.component';
import { CounterButtonComponent } from './MyComponents/counter-button/counter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
