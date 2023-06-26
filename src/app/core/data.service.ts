import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  boatdata: any = {
    name: "no name",
    seats: 0,
    location: "unknown location",
    levels: ['a','c','d']
  }

  active:string='available'
  constructor(){}
}
