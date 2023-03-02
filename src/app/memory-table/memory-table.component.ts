import { Component, OnInit } from '@angular/core';
import { Cards } from '../mock-card';

@Component({
  selector: 'app-memory-table',
  templateUrl: './memory-table.component.html',
  styleUrls: ['./memory-table.component.css'],
})
export class MemoryTableComponent implements OnInit {
  constructor() {}
  cards = Cards;
  ngOnInit(): void {}

  turnaround(integer: id){
    console.log(id)
  }
}


//als nächstes sollte die Funktion die Klasse ändern: von Klasse false (revealed) auf Klasse true (reveled)
//DAmnit könnte ich die karte umdrehen.
