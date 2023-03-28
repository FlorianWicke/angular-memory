import { Injectable } from '@angular/core';
import { Card } from './card';
import { Cards } from './mock-card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  card:Card[] = [];

  generateCards(){
    Cards.forEach(element => {
      return element
    });
    return 
  }
}
