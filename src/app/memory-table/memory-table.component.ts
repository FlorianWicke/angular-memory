import { Component, Injectable, OnInit } from '@angular/core';
import { Cards } from '../mock-card';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-memory-table',
  templateUrl: './memory-table.component.html',
  styleUrls: ['./memory-table.component.css'],
})


export class MemoryTableComponent implements OnInit {

  constructor(private cardService: CardService) {
  }
  cards = Cards;
  
  ngOnInit(): void {}
  hands: Card[] = [];

  turnaround(card: Card): void{
    const selectedCardIndex = card.id-1
    const selectedCard =  this.cards[selectedCardIndex]
    selectedCard.revealed = !selectedCard.revealed 
    this.match(card)
   }

   match(card: Card) {
    this.hands.push(card)
    const selectedCardOne = this.hands[0]
    const selectedCardTwo = this.hands[1]
    if(this.hands.length >= 2) {
      if (selectedCardOne.imgPath === selectedCardTwo.imgPath) {
        window.alert("Es ist richtig!!!")
      } else {
          window.alert("fehler")
          selectedCardOne.revealed = !selectedCardOne.revealed
          selectedCardTwo.revealed = !selectedCardTwo.revealed
      } 
      this.hands = [];
    }
  }
}

