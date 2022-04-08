import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UrlMapService {
  message:string = ''
  constructor( private urlData:HttpClient) { }
  getData(){
    const url = 'https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json';
    return this.urlData.get(url);
  }
  setData(Data){
    this.message = Data;
  }
  dataGet(){
    return this.message;
  }
}
