import { Injectable } from '@angular/core';
import { cards } from './mock-card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  getCards(){
    return cards
  }
}
