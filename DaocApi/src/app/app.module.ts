import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemSlotComponent } from './item-slot.component';
import { PlayerComponent } from './player.component';
import { BonusComponent } from './bonus.component';
import { ItemListComponent } from './item-list.component';
import { ItemService }         from './item.service';

@NgModule({
  declarations: [
    AppComponent, ItemSlotComponent, PlayerComponent, BonusComponent,ItemListComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
