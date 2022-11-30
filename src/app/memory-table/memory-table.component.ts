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
}
