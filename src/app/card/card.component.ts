import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() card!:Card;

  ngOnInit(): void {}

  turnaround(parameter: boolean){
    console.log(" es geht....")
    console.log(parameter)
     parameter = !parameter;
     console.log(parameter)
     return parameter;
   }
}
