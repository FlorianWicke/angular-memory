import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MemoryTableComponent } from './memory-table/memory-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MemoryTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
